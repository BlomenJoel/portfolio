<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import FaceImg from '$lib/components/faceImg.svelte';

	let trigger: HTMLElement | null = null;

	onMount(() => {
		if (browser && trigger) {
			gsap.registerPlugin(ScrollTrigger);
			const firstAnimationLength = 6;
			const secondAnimationLength = 5;
			gsap
				.timeline({
					scrollTrigger: {
						trigger,
						end: '80% 30%',
						start: '30% 30%',
						scrub: 1.5
					}
				})
				// LEFT
				.to(
					`#left`,
					{
						transformOrigin: 'bottom right',
						scaleX: 2,
						scaleY: 0.8,
						duration: firstAnimationLength,
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
						duration: secondAnimationLength
					},
					firstAnimationLength
				)
				.to(
					`#left`,
					{
						scaleX: 1,
						scaleY: 1,
						duration: 2,
						ease: 'elastic.inOut(2,1)'
					},
					firstAnimationLength + secondAnimationLength
				)
				.to(
					`#left`,
					{
						x: -600,
						y: 0,
						duration: 5,
						ease: 'none'
					},
					firstAnimationLength + secondAnimationLength
				)
				.to(
					`#left`,
					{
						transformOrigin: '50% 50%',
						duration: 0
					},
					firstAnimationLength + secondAnimationLength
				)
				//BOOTTOM
				.to(
					`#bottom`,
					{
						transformOrigin: 'top center',
						scaleY: 1.5,
						scaleX: 0.8,
						duration: firstAnimationLength,
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
						duration: secondAnimationLength
					},
					firstAnimationLength
				)
				.to(
					`#bottom`,
					{
						scaleX: 1,
						scaleY: 1,
						duration: 2,
						ease: 'elastic.inOut(2,1)'
					},
					firstAnimationLength + secondAnimationLength
				)
				.to(
					`#bottom`,
					{
						y: 600,
						duration: 5,
						ease: 'none'
					},
					firstAnimationLength + secondAnimationLength
				)
				// RIGHT
				.to(
					`#right`,
					{
						transformOrigin: 'bottom left',
						scaleX: 2,
						scaleY: 0.8,
						duration: firstAnimationLength,
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
						duration: secondAnimationLength
					},
					firstAnimationLength
				)
				.to(
					`#right`,
					{
						scaleX: 1,
						scaleY: 1,
						duration: 2,
						ease: 'elastic.inOut(2,1)'
					},
					secondAnimationLength + firstAnimationLength
				)
				.to(
					`#right`,
					{
						x: 600,
						duration: 5,
						ease: 'none'
					},
					secondAnimationLength + firstAnimationLength
				)
				.to(
					`#right`,
					{
						transformOrigin: '50% 50%',
						duration: 0
					},
					secondAnimationLength + firstAnimationLength
				);
		}
	});
</script>

<section class="h-screen bg-secondary flex justify-center overflow-clip" id="start">
	<div class="z-20 relative flex flex-col justify-center h-full" bind:this={trigger}>
		<HoverCursor colorTheme="dark" cursorText="THIS IS ME">
			<div class="w-96">
				<FaceImg />
			</div>
		</HoverCursor>
	</div>
</section>
