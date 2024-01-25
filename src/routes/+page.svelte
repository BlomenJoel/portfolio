<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { createScene } from '$lib/three/start';
	import Name from '$lib/components/name.svelte';
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
	import CirclingImages from '$lib/components/circlingImages.svelte';
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
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
	<HoverCursor colorTheme="dark" cursorText="Wow">
		<p class="text-center">Some text about me</p>
	</HoverCursor>
	<CirclingImages />
</section>
