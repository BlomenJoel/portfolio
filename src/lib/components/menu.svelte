<script lang="ts">
	import { browser } from '$app/environment';
	import { explodingEffect, explodingEffectLeaving, explodingText } from '$lib/utils/explodingText';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let currentId = '';
	const TEXT_ANIMATION_ID = 'exploding-text-animation';

	onMount(() => {
		if (browser) {
			explodingText(TEXT_ANIMATION_ID);
			gsap.utils.toArray('section').forEach((section: any) => {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: section,
							start: 'top 30%',
							end: 'bottom 30%',
							toggleActions: 'restart none restart none',
							markers: false,
							onEnter: (self: any) => {
								currentId = self.trigger.id;
							},
							onEnterBack: (self: any) => {
								currentId = self.trigger.id;
							}
						}
					})
					.add(function () {
						const elements = document.getElementsByClassName(`char-${currentId}`);
						if (elements) {
							explodingEffect(Array.from(elements));
						}
					}, '0')

					.add(function () {
						const elements = document.getElementsByClassName(`char-${currentId}`);
						if (elements) {
							explodingEffectLeaving(Array.from(elements));
						}
					}, '0.7');
			});
		}
	});

	const pages = ['start', 'projects', 'about'];
</script>

<div class="absolute right-0 md:w-36 w-16 h-screen flex flex-col justify-center">
	<ul
		class="fixed items-center h-fit text-2xl z-10 flex flex-col gap-12 justify-evenly z-20"
		id={TEXT_ANIMATION_ID}
	>
		{#each pages as page}
			<li
				class={currentId === page ? 'text-white font-bold' : 'text-inactive font-normal'}
				id={'test-' + page}
			>
				<a href="/#{page}" class="uppercase" id={'test-' + page}>{page}</a>
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
