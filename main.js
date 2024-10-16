import * as THREE from "three";

//1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x333333);

//2. Create the camera

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

//3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  emmisive: "#468585",
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//4. Add lights
const directionalLight = new THREE.DirectionalLight(0x9cdba6, 10);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

//5. Render the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//6. Animate the scene
renderer.render(scene, camera);

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }
