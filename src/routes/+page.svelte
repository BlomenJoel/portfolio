<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { createScene } from '$lib/three/start';
	import Name from '$lib/components/name.svelte';
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
	import CirclingImages from '$lib/components/circlingImages.svelte';
	import TramstopFront from '$lib/components/tramstop-front.svelte';
	let el: HTMLCanvasElement;
	onMount(() => {
		if (el && browser) {
			createScene(el);
		}
	});
</script>

<div class="content">
	<div id="text-input" contenteditable="true" />
	<div class="container" />
</div>
<canvas bind:this={el} class="absolute left-0 top-0 z-0" />
<section class="h-screen">
	<div class="z-20 relative layout--padding">
		<Name />
	</div>
	<div class="-translate-y-32">
		<div class="z-0 relative">
			<Tram />
		</div>
		<div class="-translate-y-56 z-10 relative w-72">
			<Tramstop />
		</div>
	</div>
</section>
<section class="h-screen relative">
	<h1 class="text-8xl relative z-10 mt-96 w-full text-center">ABOUT ME</h1>
	<p class="text-center">Some text about me</p>
	<CirclingImages />
</section>
<section class="h-screen relative">
	<h1 class="text-8xl relative z-10 mt-96 w-full text-center">PROJECTS</h1>
	<div class=" absolute w-1/2 top-0">
		<div class=" absolute left-64 top-36 rotate-6">
			<h1 class="text-2xl">RåFormat</h1>
			<p>Fullstack development</p>
		</div>
		<TramstopFront />
	</div>
</section>
