<script lang="ts">
	import { browser } from '$app/environment';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let currentId = '';

	onMount(() => {
		if (browser) {
			gsap.utils.toArray('section').forEach((section: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: 'top 30%',
						end: 'bottom 30%',
						markers: false,
						onEnter: (self: any) => {
							currentId = self.trigger.id;
						},
						onEnterBack: (self: any) => {
							currentId = self.trigger.id;
						}
					}
				});
			});
		}
	});

	const pages = ['projects', 'about', 'contact'];
</script>

<div class="absolute right-0 md:w-36 w-16 h-screen flex flex-col justify-center">
	<ul class="fixed items-center h-fit text-2xl z-10 flex flex-col gap-12 justify-evenly z-20">
		{#each pages as page}
			<li class={currentId === page ? 'text-white font-bold' : 'text-inactive font-normal'}>
				<a href="/#{page}" class="uppercase">{page}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		width: inherit;
	}
	ul > li {
		writing-mode: vertical-lr;
	}
</style>
