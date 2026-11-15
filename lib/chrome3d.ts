/**
 * Shared WebGL stage for the floating chrome objects.
 *
 * One fixed, full-viewport canvas draws every object: each <Chrome3D> element is a
 * layout slot, and on every frame we scissor the canvas to that slot's rectangle and
 * render its mesh there. One GL context for the whole site, no per-object canvases.
 * Reflections come from a small procedural studio lit in the logo's blue and orange.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type Shape = "knot" | "rings" | "cubes" | "cross" | "molecule" | "gyro" | "zero";

type Item = { el: HTMLElement; scene: THREE.Scene; camera: THREE.PerspectiveCamera; obj: THREE.Object3D; seed: number };

let renderer: THREE.WebGLRenderer | null = null;
let env: THREE.Texture | null = null;
let material: THREE.MeshStandardMaterial | null = null;
let raf = 0;
let failed = false;
const items = new Set<Item>();
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
let reduced = false;

function buildEnv(r: THREE.WebGLRenderer) {
  const s = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: 0x767c86, side: THREE.BackSide }));
  s.add(room);
  const panel = (color: number, w: number, h: number, pos: [number, number, number], intensity = 1) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    s.add(m);
  };
  panel(0xffffff, 9, 5, [0, 9, 2], 5); // key, overhead
  panel(0xffffff, 3, 12, [-9, 1, 3], 2.6); // left strip
  panel(0xdfeeff, 4, 10, [9, 2, -2], 2.2); // right strip
  panel(0x4599d3, 12, 6, [-4, -8, 5], 2.4); // brand blue bounce
  panel(0x4599d3, 6, 6, [7, -3, 8], 1.6);
  panel(0xf05623, 3, 3, [6, 6, -8], 2.2); // warm kicker
  panel(0xffffff, 6, 3, [0, 2, -9.5], 1.4);
  panel(0x050608, 14, 5, [0, -9.5, 0], 1); // dark floor for contrast
  panel(0x050608, 5, 14, [3, 0, 9.5], 1); // dark card behind camera
  const pmrem = new THREE.PMREMGenerator(r);
  const tex = pmrem.fromScene(s, 0.035).texture;
  pmrem.dispose();
  return tex;
}

function mat() {
  if (!material) material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.06, envMapIntensity: 1.3 });
  return material;
}

function build(shape: Shape): THREE.Object3D {
  const g = new THREE.Group();
  const m = mat();
  const add = (geo: THREE.BufferGeometry, p: [number, number, number] = [0, 0, 0], r: [number, number, number] = [0, 0, 0], s = 1) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(...p);
    mesh.rotation.set(...r);
    mesh.scale.setScalar(s);
    g.add(mesh);
    return mesh;
  };
  switch (shape) {
    case "knot":
      add(new THREE.TorusKnotGeometry(0.82, 0.3, 240, 36, 2, 3));
      break;
    case "rings": {
      const t = new THREE.TorusGeometry(0.74, 0.25, 40, 120);
      add(t, [-0.46, 0, 0], [0.5, 0.2, 0]);
      add(t, [0.46, 0, 0], [0.5 + Math.PI / 2, 0.2, 0.4]);
      break;
    }
    case "gyro": {
      const t = new THREE.TorusGeometry(1.02, 0.2, 36, 140);
      add(t);
      add(t, [0, 0, 0], [Math.PI / 2, 0, 0]);
      add(t, [0, 0, 0], [0, Math.PI / 2, 0]);
      add(new THREE.SphereGeometry(0.34, 48, 32));
      break;
    }
    case "cubes": {
      const b = new RoundedBoxGeometry(0.62, 0.62, 0.62, 6, 0.1);
      const pts: [number, number, number][] = [
        [0, 0, 0], [0.62, 0.28, 0.2], [-0.56, 0.36, -0.18], [0.16, -0.62, 0.3], [-0.3, 0.7, 0.42],
        [0.5, -0.38, -0.5], [-0.62, -0.42, 0.26], [0.14, 0.5, -0.62], [-0.1, -0.16, 0.74],
      ];
      pts.forEach((p, i) => add(b, p, [i * 0.7, i * 1.3, i * 0.4], 0.78 + ((i * 37) % 5) * 0.07));
      break;
    }
    case "cross": {
      const c = new THREE.CapsuleGeometry(0.4, 1.7, 24, 48);
      add(c, [0, 0, 0], [0, 0, Math.PI / 4]);
      add(c, [0, 0, 0], [0, 0, -Math.PI / 4]);
      break;
    }
    case "molecule": {
      add(new THREE.SphereGeometry(0.4, 48, 32));
      const dirs: [number, number, number][] = [[1, 0.5, 0.2], [-0.9, 0.6, -0.3], [0.2, -1, 0.4], [-0.3, 0.3, 1], [0.5, 0.9, -0.7], [-0.7, -0.6, -0.6], [0.9, -0.5, -0.5]];
      const rod = new THREE.CylinderGeometry(0.055, 0.055, 1, 16);
      const ball = new THREE.SphereGeometry(0.22, 40, 24);
      dirs.forEach((d, i) => {
        const v = new THREE.Vector3(...d).normalize();
        const len = 0.95 + (i % 3) * 0.13;
        add(ball, [v.x * len, v.y * len, v.z * len], [0, 0, 0], 0.8 + (i % 2) * 0.35);
        const r = add(rod, [v.x * len * 0.5, v.y * len * 0.5, v.z * len * 0.5]);
        r.scale.set(1, len, 1);
        r.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
      });
      break;
    }
    case "zero":
      add(new THREE.TorusGeometry(0.86, 0.36, 48, 140)).scale.set(0.82, 1.12, 1);
      break;
  }
  return g;
}

function init() {
  if (renderer || failed) return;
  try {
    const canvas = document.createElement("canvas");
    canvas.id = "c3d-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.autoClear = false;
    env = buildEnv(renderer);
    reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    }, { passive: true });
    canvas.addEventListener("webglcontextlost", (e) => e.preventDefault());
  } catch {
    failed = true;
    renderer = null;
  }
}

function resize() {
  if (!renderer) return;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
}

function frame(t: number) {
  raf = requestAnimationFrame(frame);
  if (!renderer) return;
  const W = window.innerWidth;
  const H = window.innerHeight;
  renderer.setScissorTest(false);
  renderer.clear();
  renderer.setScissorTest(true);
  pointer.x += (pointer.tx - pointer.x) * 0.05;
  pointer.y += (pointer.ty - pointer.y) * 0.05;
  const time = reduced ? 0 : t * 0.001;
  const sy = window.scrollY;
  items.forEach((it) => {
    const r = it.el.getBoundingClientRect();
    if (r.width < 2 || r.bottom < 0 || r.top > H || r.right < 0 || r.left > W) return;
    // Float + spin on time, turn with the scroll, lean towards the pointer.
    it.obj.rotation.x = it.seed + time * 0.28 + sy * 0.0011 + pointer.y * 0.35;
    it.obj.rotation.y = it.seed * 2 + time * 0.4 + sy * 0.0017 + pointer.x * 0.45;
    it.obj.rotation.z = Math.sin(time * 0.5 + it.seed) * 0.18;
    it.obj.position.y = Math.sin(time * 0.9 + it.seed * 3) * 0.07;
    it.camera.aspect = r.width / r.height;
    it.camera.updateProjectionMatrix();
    const y = H - r.bottom;
    renderer!.setViewport(r.left, y, r.width, r.height);
    renderer!.setScissor(r.left, y, r.width, r.height);
    renderer!.render(it.scene, it.camera);
  });
}

export function mount(el: HTMLElement, shape: Shape): () => void {
  init();
  if (!renderer || !env) return () => {};
  const scene = new THREE.Scene();
  scene.environment = env;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0, 5.6);
  const obj = build(shape);
  scene.add(obj);
  const item: Item = { el, scene, camera, obj, seed: Math.random() * 6 };
  items.add(item);
  if (!raf) raf = requestAnimationFrame(frame);
  return () => {
    items.delete(item);
    obj.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) mesh.geometry.dispose();
    });
    if (items.size === 0 && renderer) {
      cancelAnimationFrame(raf);
      raf = 0;
      renderer.setScissorTest(false);
      renderer.clear();
    }
  };
}
