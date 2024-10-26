const canvas = document.getElementById('three-canvas');
const contentSection = document.getElementById('content-section');

const scene = new THREE.Scene();
const camera = createCamera();
const renderer = createRenderer(canvas);

const sphere = createTexturedSphere();
scene.add(sphere);

window.addEventListener('resize', handleResize);

handleResize();
animate();

function createCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.z = 500;
  return camera;
}

function createRenderer(canvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
}

function createTexturedSphere() {
  const loader = new THREE.TextureLoader();
  const texture = loader.load('assets/background.jpg', () => {
    texture.minFilter = THREE.LinearFilter;
  });

  const geometry = new THREE.SphereGeometry(500, 60, 40, Math.PI / 2);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide // Texture is visible inside the sphere
  });

  return new THREE.Mesh(geometry, material);
}

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.00025; // Rotate the skybox slowly
  renderer.render(scene, camera);
}

function handleResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Update renderer and camera
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Sync content section size with the viewport
  contentSection.style.width = `${width}px`;
  contentSection.style.height = `${height}px`;
}

new Tooltip(document.getElementById("github"), {
  title: "sasalatart",
  placement: "bottom"
});

new Tooltip(document.getElementById("linkedin"), {
  title: "SASalataRT",
  placement: "bottom"
});

