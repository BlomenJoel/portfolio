<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Test from './test.svelte';

	let trigger: HTMLElement | null = null;

	onMount(() => {
		if (browser && trigger) {
			gsap.registerPlugin(ScrollTrigger);

			gsap
				.timeline({
					scrollTrigger: {
						markers: true,
						trigger,
						end: 'bottom',
						start: '+10',
						scrub: 0.2
					}
				})
				.to(
					`#left`,
					{
						transformOrigin: 'bottom right',
						scaleX: 2,
						scaleY: 1.15,
						duration: 6,
						ease: 'elastic.inOut(0.1,1)'
					},
					'0'
				)
				.to(
					`#left`,
					{
						transformOrigin: '50% 50%',
						scaleX: 1,
						scaleY: 1,
						duration: 3,
						ease: 'elastic.inOut(0.1,1)'
					},
					'6'
				)
				.to(
					`#left`,
					{
						transformOrigin: '50% 50%',
						x: -600,
						y: -600,
						duration: 20,
						ease: 'none'
					},
					'6'
				);
			// // BOTTOM
			// .to(
			// 	`#bottom`,
			// 	{
			// 		y: 600,
			// 		duration: 20,
			// 		ease: 'none'
			// 	},
			// 	'0'
			// )
			// // RIGHT
			// .to(
			// 	`#right`,
			// 	{
			// 		x: 600,
			// 		y: -600,
			// 		duration: 20
			// 	},

			// 	'0'
			// );
		}
	});
</script>

<div bind:this={trigger}>
	<Test />
</div>
