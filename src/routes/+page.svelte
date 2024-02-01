<script lang="ts">
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
	import CirclingImages from '$lib/components/circlingImages.svelte';
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import Face from '$lib/components/face/face.svelte';
</script>

<section class="h-screen md:pr-36 pr-16 bg-secondary flex flex-col justify-center" id="start">
	<div class="z-20 relative layout--padding flex justify-center">
		<HoverCursor colorTheme="dark" cursorText="he's not this pixly live">
			<div class="w-96">
				<Face />
			</div>
		</HoverCursor>
	</div>
</section>
<section class="h-screen md:pr-36 pr-16 bg-main" id="projects">
	<HoverCursor colorTheme="dark" cursorText="WHAT A GUY!">
		<h1 class="text-8xl relative z-10 w-full text-center">PROJECTS IM PROUD OF</h1>
		<ul>
			<li>RÅFORMAT</li>
			<li>QUEENSLAB</li>
			<li>BELID</li>
			<li>PARKLANE?</li>
		</ul>
	</HoverCursor>
</section>
<section class="h-screen relative bg-secondary md:pr-36 pr-16" id="about">
	<h1 class="text-8xl relative z-10 w-full text-center">ABOUT ME</h1>
	<HoverCursor colorTheme="dark" cursorText="Wow">
		<p class="text-center">Some text about me</p>
	</HoverCursor>
	<CirclingImages />
</section>

<section class="h-screen md:pr-36 pr-16 bg-main relative" id="contact">
	<div class="absolute right-0">
		<div class="z-0 overflow-clip w-screen h-screen">
			<Tram />
		</div>
		<div class=" z-10 absolute w-72 top-28">
			<Tramstop />
		</div>
	</div>
	<HoverCursor colorTheme="dark" cursorText="WHAT A GUY!">
		<h1 class="text-8xl relative z-10 w-full text-center">JUST LIKE TRAMS I AM VERY REACHABLE</h1>
	</HoverCursor>
</section>
