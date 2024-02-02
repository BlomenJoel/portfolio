<script lang="ts">
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import Header from '$lib/components/header.svelte';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	let element: HTMLElement | null = null;
	let project: HTMLElement | null = null;
	let thirdProject: HTMLElement | null = null;

	onMount(() => {
		if (browser && element) {
			gsap.registerPlugin(ScrollTrigger);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: project,
						start: 'top bottom ',
						end: '50% 50%',
						scrub: 2.3
					}
				})
				.fromTo(
					project,
					{ autoAlpha: 0, y: 200, duration: 0.7 },
					{ autoAlpha: 1, y: 0, duration: 0.7 }
				)
				.fromTo(
					element,
					{ autoAlpha: 0, y: 100, duration: 0.8 },
					{ autoAlpha: 1, y: 0, duration: 0.8 },
					'>'
				)
				.fromTo(
					thirdProject,
					{ autoAlpha: 0, y: 200, duration: 0.6 },
					{ autoAlpha: 1, y: 0, duration: 0.6 },
					'>'
				);
		}
	});
</script>

<section class="p-8 md:p-24 md:pr-36 pr-16 bg-main flex flex-col items-center" id="projects">
	<Header header="SELECTED PROJECTS" />
	<ul class="flex flex-row gap-12 mt-24 flex-wrap justify-center w-full">
		<div class="ml-auto w-[40rem]" bind:this={project}>
			<HoverCursor colorTheme="dark" cursorText="CHECK IT OUT" link="https://raformat.se/sv/">
				<li class=" flex md:flex-row flex-col gap-4 items-center">
					<img src="/raformat.png" alt="raformat webpage" class="md:w-2/3" />
					<div class="md:w-1/3 w-full text-gray">
						<h3 class="text-3xl text-white">RÅFORMAT</h3>
						<p class="text-sm">SVELTEKIT</p>
						<p class="text-sm">PAYLOAD CMS</p>
						<p class="text-sm">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
		<div class="mr-auto w-[40rem]" bind:this={element}>
			<HoverCursor
				colorTheme="light"
				cursorText="CHECK IT OUT"
				link="https://www.belidlightinggroup.com/sv-se"
			>
				<li class=" flex md:flex-row flex-col gap-4 items-center">
					<img src="/blg.png" alt="Belid Lightning Group webpage" class="md:w-2/3" />
					<div class="md:w-1/3 w-full text-gray">
						<h3 class="text-3xl text-white">BELID LIGHTNING GROUP</h3>
						<p class="text-sm">SVELTEKIT</p>
						<p class="text-sm">SANITY CMS</p>
					</div>
				</li>
			</HoverCursor>
		</div>
		<div class="mx-auto w-[40rem]" bind:this={thirdProject}>
			<HoverCursor colorTheme="dark" cursorText="CHECK IT OUT" link="https://queenslab.co/en/">
				<li class=" flex md:flex-row flex-col gap-4 items-center">
					<img src="/queenslab.png" alt="QueensLab webpage" class="md:w-2/3" />
					<div class="md:w-1/3 w-full text-gray">
						<h3 class="text-3xl text-white">QUEENSLAB</h3>
						<p class="text-sm">SVELTEKIT</p>
						<p class="text-sm">PAYLOAD CMS</p>
						<p class="text-sm">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
	</ul>
</section>
