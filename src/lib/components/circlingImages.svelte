<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	let trigger: HTMLElement | null = null;
	const images = ['birken.png', 'birken.png', 'birken.png', 'birken.png'];
	onMount(() => {
		if (browser && trigger) {
			gsap.registerPlugin(ScrollTrigger);

			gsap
				.timeline({
					// START AND END ARE LIKE INFINITE SO THE USER ALWAYS AFFECT THE ROTATION
					scrollTrigger: {
						markers: false,
						trigger,
						scrub: 0.2
					}
				})
				.to(`.wrapper-shoe`, {
					rotation: 360 * -1,
					duration: 0.2,
					ease: 'none'
				});
			gsap
				.timeline({
					// START AND END ARE LIKE INFINITE SO THE USER ALWAYS AFFECT THE ROTATION
					scrollTrigger: {
						markers: false,
						trigger,
						scrub: 0.2
					}
				})
				.to(`.wrapper-shoes`, {
					rotation: 360 * 1,
					duration: 0.2,
					ease: 'none'
				});
		}
	});
</script>

<div bind:this={trigger}>
	<div class="wrapper-shoes absolute -left-[10rem] top-0">
		<div class=" rotating flex md:h-[40rem] md:w-[40rem] h-[20rem] w-[20rem]">
			{#each images as img, index}
				<div
					class="wrapper-shoe absolute md:w-32 w-16
				{index === 0 && 'md:top-[16rem] top-[8rem] left-0'} 
				{index === 1 && 'top-0 md:left-[16rem] left-[8rem]'} 
				{index === 2 && 'md:top-[16rem] top-[8rem] right-0'} 
				{index === 3 && 'bottom-0 md:right-[16rem] right-[8rem]'}"
				>
					<img src={img} alt="img" class="rotating-shoes" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.rotating {
		animation: rotating 20s linear infinite;
	}
	.rotating-shoes {
		animation: rotatingshoes 20s linear infinite;
	}
	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes rotatingshoes {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>
