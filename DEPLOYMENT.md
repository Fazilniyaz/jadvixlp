# Deploying Jadvix Website to AWS EC2 (Beginner Guide)

Goal: run this Next.js site on an AWS server and open it in a browser at a fixed
public IP address (an **Elastic IP**).

**The big picture** (what we're building):

```
Your browser  ──HTTP :80──►  Nginx (on EC2)  ──proxy :3000──►  Next.js (PM2)
                                   ▲
                             Elastic IP (fixed public address)
```

- **EC2** = a virtual computer you rent from AWS (your "server").
- **Elastic IP** = a permanent public IP address. A normal EC2 IP changes every time
  you stop/start the machine; an Elastic IP stays the same.
- **Nginx** = a web server that listens on port 80 (normal web traffic) and forwards
  requests to your app. This is called a **reverse proxy**.
- **PM2** = a process manager that keeps your Next.js app running 24/7 and restarts it
  if it crashes or the server reboots.

---

## Phase 1 — Launch the EC2 server

1. Sign in to the **AWS Console** → search **EC2** → open it.
2. Top-right, make sure your **Region** is the one closest to your users (e.g.
   `London eu-west-2` or `Mumbai ap-south-1`). Remember it — Elastic IP lives in the same region.
3. Click **Launch instance**.
4. Fill in:
   - **Name**: `jadvix-website`
   - **OS Image (AMI)**: **Ubuntu Server 22.04 LTS** (free-tier eligible)
   - **Instance type**: `t3.micro` (or `t2.micro`) — free-tier eligible
   - **Key pair**: click **Create new key pair** → name it `jadvix-key` → type **RSA**,
     format **.pem** → **Download**. This `.pem` file is your password to log in. Keep it safe;
     you can't download it again.
5. **Network settings** → **Edit** → under **Firewall (security groups)** create a new one
   and add these **inbound rules** (a security group is EC2's firewall):
   | Type  | Port | Source            | Why                          |
   |-------|------|-------------------|------------------------------|
   | SSH   | 22   | My IP             | So *you* can log in          |
   | HTTP  | 80   | Anywhere (0.0.0.0/0) | So visitors can load the site |
   | HTTPS | 443  | Anywhere (0.0.0.0/0) | For later, when you add a domain + SSL |
6. Leave storage at the default 8 GB (fine for this site).
7. Click **Launch instance**.

---

## Phase 2 — Give it a fixed address (Elastic IP)

1. EC2 left menu → **Elastic IPs** → **Allocate Elastic IP address** → **Allocate**.
2. Select the new IP → **Actions** → **Associate Elastic IP address**.
3. Choose your `jadvix-website` instance → **Associate**.
4. Note this IP down — e.g. `13.40.xx.xx`. **This is your website's public address.**

> ⚠️ Only keep an Elastic IP while it's attached to a running instance. An *unattached*
> Elastic IP is charged a small hourly fee by AWS.

---

## Phase 3 — Connect to the server (SSH)

SSH = a secure remote terminal into your server.

On **Windows (PowerShell)** — go to the folder where your `.pem` file is:

```powershell
# One-time: lock down the key file so SSH accepts it
icacls jadvix-key.pem /inheritance:r
icacls jadvix-key.pem /grant:r "$($env:USERNAME):(R)"

# Log in (replace with YOUR Elastic IP)
ssh -i jadvix-key.pem ubuntu@13.40.xx.xx
```

Type `yes` when it asks about authenticity. You're now inside the server — the prompt
changes to `ubuntu@ip-...:~$`. Every command below runs **on the server**.

---

## Phase 4 — Install the tools on the server

```bash
# Refresh the package list and upgrade
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS (Next.js 14 needs Node >= 18.17)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install git, nginx (web server), and pm2 (process manager)
sudo apt install -y git nginx
sudo npm install -g pm2

# Check versions (sanity check)
node -v      # should print v20.x
nginx -v
pm2 -v
```

### Add swap memory (important on t2/t3.micro)

`t3.micro` has only 1 GB RAM, and `next build` can run out of memory. A **swap file**
lets the server borrow disk space as extra memory:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab   # make it permanent
free -h   # you should now see 2.0Gi of Swap
```

---

## Phase 5 — Get your code onto the server

Pick **ONE** of these.

### Option A (recommended) — via GitHub

On **your PC**, put the project on GitHub first (one time):

```bash
cd "D:/Fazil/Jadvix/jadvix-website"
git init
git add .
git commit -m "Initial commit"
# create an empty repo on github.com called jadvix-website, then:
git remote add origin https://github.com/<your-username>/jadvix-website.git
git branch -M main
git push -u origin main
```

Then on the **server**:

```bash
cd ~
git clone https://github.com/<your-username>/jadvix-website.git
cd jadvix-website
```

> Later, to deploy updates: `git push` from your PC, then on the server run
> `git pull && npm install && npm run build && pm2 restart jadvix`.

### Option B (quick) — copy the folder directly with SCP

Run this **on your PC** (not on the server). It skips `node_modules`/`.next`:

```powershell
# From D:/Fazil/Jadvix, in PowerShell
scp -i jadvix-key.pem -r jadvix-website ubuntu@13.40.xx.xx:/home/ubuntu/
```

Then back on the **server**: `cd ~/jadvix-website`.

---

## Phase 6 — Build and run the app

On the **server**, inside `~/jadvix-website`:

```bash
npm install          # install dependencies
npm run build        # create the optimized production build (this uses the swap memory)
```

Now start it under PM2 so it runs forever:

```bash
# Runs "npm start" (which is "next start" on port 3000), names it "jadvix"
pm2 start npm --name jadvix -- start

pm2 save                                   # remember this app list
pm2 startup                                # print a command to auto-start on reboot
# ⬆ copy-paste and run the command it prints (starts with "sudo env PATH=...")

pm2 status                                 # should show "jadvix" as "online"
```

Quick local test (still on the server):

```bash
curl -I http://localhost:3000              # should return HTTP/1.1 200 OK
```

At this point the app runs on port 3000 **inside** the server, but the outside world
can't reach it yet (only ports 22/80/443 are open). Nginx bridges that gap next.

---

## Phase 7 — Put Nginx in front (port 80 → 3000)

Create an Nginx site config:

```bash
sudo nano /etc/nginx/sites-available/jadvix
```

Paste this (replace `13.40.xx.xx` with your Elastic IP):

```nginx
server {
    listen 80;
    server_name 13.40.xx.xx;   # your Elastic IP (or domain later)

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and exit nano: `Ctrl+O`, `Enter`, then `Ctrl+X`.

Enable the site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/jadvix /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default   # remove the "Welcome to nginx" page
sudo nginx -t                                 # test config → should say "syntax is ok"
sudo systemctl restart nginx
```

---

## Phase 8 — Open your site 🎉

In a browser, go to:

```
http://13.40.xx.xx
```

(your Elastic IP). You should see the Jadvix homepage with the hero image.

---

## Updating the site later

```bash
ssh -i jadvix-key.pem ubuntu@13.40.xx.xx
cd ~/jadvix-website
git pull                 # (Option A) or re-scp the folder (Option B)
npm install
npm run build
pm2 restart jadvix
```

---

## (Optional) Add a domain + free HTTPS

Once you point a domain (e.g. an `A` record → your Elastic IP):

```bash
sudo snap install --classic certbot
sudo ln -sf /snap/bin/certbot /usr/bin/certbot
# change server_name in the Nginx config from the IP to your domain first, reload nginx, then:
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot auto-configures HTTPS and renews the certificate automatically.

---

## Troubleshooting

| Symptom | Check |
|--------|-------|
| Browser can't connect at all | Security group has **HTTP 80 → Anywhere**? Elastic IP associated? |
| "502 Bad Gateway" | Is the app running? `pm2 status`. Test `curl -I http://localhost:3000`. |
| Site works then dies after reboot | Did you run the `pm2 startup` command it printed, then `pm2 save`? |
| `next build` killed / out of memory | Did you add the 2 GB swap file (Phase 4)? |
| Logo/hero image missing | Confirm `public/` folder was copied and `npm run build` ran on the server. |
| See app logs | `pm2 logs jadvix` |
| See Nginx errors | `sudo tail -f /var/log/nginx/error.log` |
```
