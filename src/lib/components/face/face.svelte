<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import FaceImg from './faceImg.svelte';

	let trigger: HTMLElement | null = null;

	onMount(() => {
		if (browser && trigger) {
			gsap.registerPlugin(ScrollTrigger);

			gsap
				.timeline({
					scrollTrigger: {
						trigger,
						end: 'bottom 30%',
						start: 'top 30%',
						scrub: 0.5,
						toggleActions: 'play pause play reverse'
					}
				})
				// LEFT
				.to(
					`#left`,
					{
						transformOrigin: 'bottom right',
						scaleX: 2,
						scaleY: 0.8,
						duration: 3,
						ease: 'elastic.inOut(1,1)'
					},
					'0'
				)
				.to(
					`#left`,
					{
						transformOrigin: 'bottom right',
						scaleX: 3,
						scaleY: 0.6,
						duration: 3
					},
					'3'
				)
				.to(
					`#left`,
					{
						scaleX: 1,
						scaleY: 1,
						duration: 2,
						ease: 'elastic.inOut(2,1)'
					},
					'6'
				)
				.to(
					`#left`,
					{
						x: -600,
						y: 0,
						duration: 5,
						ease: 'none'
					},
					'6'
				)
				.to(
					`#left`,
					{
						transformOrigin: '50% 50%',
						duration: 0
					},
					'6'
				)
				//BOOTTOM
				.to(
					`#bottom`,
					{
						transformOrigin: 'top center',
						scaleY: 1.5,
						scaleX: 0.8,
						duration: 3,
						ease: 'elastic.inOut(1,1)'
					},
					'0'
				)
				.to(
					`#bottom`,
					{
						transformOrigin: 'top center',
						scaleY: 2,
						scaleX: 0.6,
						duration: 3
					},
					'3'
				)
				.to(
					`#bottom`,
					{
						scaleX: 1,
						scaleY: 1,
						duration: 2,
						ease: 'elastic.inOut(2,1)'
					},
					'6'
				)
				.to(
					`#bottom`,
					{
						y: 600,
						duration: 5,
						ease: 'none'
					},
					'6'
				)
				// RIGHT
				.to(
					`#right`,
					{
						transformOrigin: 'bottom left',
						scaleX: 2,
						scaleY: 0.8,
						duration: 3,
						ease: 'elastic.inOut(1,1)'
					},
					'0'
				)
				.to(
					`#right`,
					{
						transformOrigin: 'bottom left',
						scaleX: 3,
						scaleY: 0.6,
						duration: 3
					},
					'3'
				)
				.to(
					`#right`,
					{
						scaleX: 1,
						scaleY: 1,
						duration: 2,
						ease: 'elastic.inOut(2,1)'
					},
					'6'
				)
				.to(
					`#right`,
					{
						x: 600,
						duration: 5,
						ease: 'none'
					},
					'6'
				)
				.to(
					`#right`,
					{
						transformOrigin: '50% 50%',
						duration: 0
					},
					'6'
				);
		}
	});
</script>

<div bind:this={trigger}>
	<FaceImg />
</div>
