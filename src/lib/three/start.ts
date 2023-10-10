import { browser } from '$app/environment';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

let renderer: THREE.WebGLRenderer;
let mesh: THREE.Mesh;
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
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	camera.position.z = 5;
	const loader = new FontLoader();
	console.log({ loader }, TextGeometry);
	loader.load('/fonts/helvetiker_bold.typeface.json', function (font: any) {
		const geometry = new TextGeometry('JOEL BLOMEN', {
			font: font,
			size: 40,
			height: 4,
			curveSegments: 12
		});
		geometry.computeBoundingBox();

		mesh = new THREE.Mesh(geometry, material);
		mesh.position.x = -200;
		mesh.position.z = -200;
		mesh.position.y = 0;

		mesh.rotation.x = 0;
		mesh.rotation.y = 0;
		scene.add(mesh);

		// scene.add(geometry);
	});

	// cube = new THREE.Mesh(geometry, material);
	// scene.add(cube);
	window.addEventListener('resize', resize);
}

const animate = () => {
	requestAnimationFrame(animate);
	if (mesh) {
		// mesh.rotation.x += 0.01;
		// mesh.rotation.y += 0.01;
	}
	if (scene && camera) {
		renderer.render(scene, camera);
	}
};
