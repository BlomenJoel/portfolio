<script lang="ts">
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import Header from '$lib/components/header.svelte';
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
</script>

<section class="min-h-screen p-8 md:p-24 md:pr-36 pr-16 bg-main relative" id="contact">
	<div class="absolute right-0 top-0 z-0 pointer-events-none">
		<div class="z-0 overflow-clip w-screen min-h-screen h-full">
			<Tram />
		</div>
		<div class=" z-10 absolute w-72 top-28">
			<Tramstop />
		</div>
	</div>
	<div class="flex flex-col mt-[10%]">
		<HoverCursor colorTheme="dark" cursorText="SEND A EMAIL" link="mailto:blomenjoel@gmail.com">
			<Header header="REACH OUT" />
		</HoverCursor>
	</div>
</section>
