<script lang="ts">
	import { browser } from '$app/environment';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			gsap.set('.cursor-animation', { xPercent: -50, yPercent: -50 });

			const cursorAnimation = document.querySelector('.cursor-animation');

			const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			const mouse = { x: pos.x, y: pos.y };
			const speed = 0.4;

			let xSet = gsap.quickSetter(cursorAnimation, 'x', 'px');
			let ySet = gsap.quickSetter(cursorAnimation, 'y', 'px');

			window.addEventListener('mousemove', (e) => {
				mouse.x = e.x;
				mouse.y = e.y;
			});

			gsap.ticker.add(() => {
				const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

				pos.x += (mouse.x - pos.x) * dt;
				pos.y += (mouse.y - pos.y) * dt;
				xSet(pos.x);
				ySet(pos.y);
			});
		}
	});
</script>

<div class="cursor-animation hidden md:block info-medium" />

<style>
	.cursor-animation {
		width: 30px;
		height: 30px;
		position: fixed;
		top: 0;
		left: 0;
		border-radius: 50%;
		pointer-events: none;
		z-index: 100;
		background: white;
		text-align: center;
		letter-spacing: 0.1rem;
	}
</style>
