const canvas = document.getElementById('three-canvas');

const scene = new THREE.Scene();
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 500;

const loader = new THREE.TextureLoader();
const texture = loader.load('assets/background.jpg');
texture.minFilter = THREE.LinearFilter;

const geometry = new THREE.SphereGeometry(500, 60, 40, Math.PI / 2);
const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.BackSide // Texture is visible inside the sphere
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function animate() {
  requestAnimationFrame(animate);

  // Rotate the skybox slowly
  sphere.rotation.y += 0.00025;

  renderer.render(scene, camera);
}

// Handle window resizing and maintain the aspect ratio
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;

  renderer.setSize(width, height);
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
});

// Start the animation loop
animate();
