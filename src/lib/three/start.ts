import { browser } from '$app/environment';
import * as THREE from 'three';

let renderer: THREE.WebGLRenderer;
let cube: THREE.Mesh;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	if (camera) {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	}
};

export const createScene = (el: HTMLCanvasElement) => {
	if (browser) {
		renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
		resize();
		animate();
	}
};

if (browser) {
	scene = new THREE.Scene();
	scene.background = new THREE.Color('transparent');
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	camera.position.z = 5;

	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	window.addEventListener('resize', resize);
}

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	if (scene && camera) {
		renderer.render(scene, camera);
	}
};
