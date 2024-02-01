<script lang="ts">
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
	import CirclingImages from '$lib/components/circlingImages.svelte';
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import Face from '$lib/sections/faceSection.svelte';
	import Projects from '$lib/sections/projectSection.svelte';
</script>

<Face />
<Projects />

<section
	class="h-screen flex flex-col items-center relative bg-secondary p-8 md:p-24 md:pr-36 pr-16"
	id="about"
>
	<h1 class="text-6xl text-center text-white font-bold">WHO AM I</h1>
	<p class="text-xl w-1/3 text-center text-white font-bold mt-8">
		I LIKE COFFEE, TRIATHLON, WOOD-WORKING AND DOGS. MY FAVORITE THING IS DEFINITLY DOGS!
	</p>
	<p class="text-xl w-1/3 text-center text-white font-bold mt-8">
		I ALSO THINK THAT SHOES VERY MUCH SHOWS WHO YOU ARE, SO HERE'S ALL THE SHOES THAT I OWN.
	</p>
	<CirclingImages />
</section>

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
