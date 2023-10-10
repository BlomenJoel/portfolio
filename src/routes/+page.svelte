<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { createScene } from '$lib/three/start';

	let el: HTMLCanvasElement;
	onMount(() => {
		if (el && browser) {
			createScene(el);
		}
	});
</script>

<h1 class="grid h-screen place-content-center text-8xl relative z-10">Welcome to SvelteKit</h1>
<canvas bind:this={el} class="absolute left-0 top-0 w-auto" />
