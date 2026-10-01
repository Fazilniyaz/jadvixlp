/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Static HTML export -> produces an `out/` folder of plain HTML/CSS/JS
  // that can be deployed to any static host (no Node server needed).
  output: "export",
  // next/image cannot use the optimization server in a static export.
  images: { unoptimized: true },
  // Emit /about/index.html etc. so clean URLs work on plain static hosts.
  trailingSlash: true,
};

export default nextConfig;
