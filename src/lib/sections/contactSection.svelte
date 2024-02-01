<script lang="ts">
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
</script>

<section class="h-screen p-8 md:p-24 md:pr-36 pr-16 bg-main relative" id="contact">
	<div class="absolute right-0 bottom-0 z-0 pointer-events-none">
		<div class="z-0 overflow-clip w-screen h-screen">
			<Tram />
		</div>
		<div class=" z-10 absolute w-72 top-28">
			<Tramstop />
		</div>
	</div>
	<h1 class="text-6xl text-center text-white font-bold">REACH OUT</h1>
	<HoverCursor colorTheme="dark" cursorText="REACH OUT" link="mailto:blomenjoel@gmail.com">
		<h1 class="text-6xl text-center text-white font-bold mt-96">blomenjoel@gmail.com</h1>
	</HoverCursor>
</section>
