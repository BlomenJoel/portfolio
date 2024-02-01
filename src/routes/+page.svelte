<script lang="ts">
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
	import CirclingImages from '$lib/components/circlingImages.svelte';
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
	import Face from '$lib/components/face/face.svelte';
</script>

<section
	class="h-screen p-8 md:p-24 md:pr-36 pr-16 bg-secondary flex flex-col justify-center"
	id="start"
>
	<div class="z-20 relative layout--padding flex justify-center">
		<HoverCursor colorTheme="dark" cursorText="this is me">
			<div class="w-96">
				<Face />
			</div>
		</HoverCursor>
	</div>
</section>
<section class="p-8 md:p-24 md:pr-36 pr-16 bg-main flex flex-col items-center" id="projects">
	<h1 class="text-6xl text-center text-white font-bold">MOST OF THE WORK I'VE DONE</h1>
	<p class="text-2xl w-1/3 text-center text-white font-bold">
		I CAN'T SHOW, BUT HERE ARE SOME THAT I CAN
	</p>
	<ul class="flex flex-row gap-4 flex-wrap justify-center w-full">
		<div class="ml-auto w-[40rem]">
			<HoverCursor colorTheme="dark" cursorText="CHECK IT OUT" link="https://raformat.se/sv/">
				<li class="p-12 flex gap-4 items-center">
					<img src="/raformat.png" alt="raformat webpage" class="w-2/3" />
					<div class="w-1/3">
						<h3 class="text-center text-white text-4xl">RÅFORMAT</h3>
						<p class="text-center text-white">SVELTEKIT</p>
						<p class="text-center text-white">PAYLOAD</p>
						<p class="text-center text-white">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
		<div class="mr-auto w-[40rem]">
			<HoverCursor
				colorTheme="light"
				cursorText="CHECK IT OUT"
				link="https://www.belidlightinggroup.com/sv-se"
			>
				<li class="p-12 flex gap-4 items-center">
					<img src="/blg.png" alt="Belid Lightning Group webpage" class="w-2/3" />
					<div class="w-1/3">
						<h3 class="text-center text-white text-4xl">BELID LIGHTNING GROUP</h3>
						<p class="text-center text-white">SVELTEKIT</p>
						<p class="text-center text-white">PAYLOAD</p>
						<p class="text-center text-white">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
		<div class="mx-auto w-[40rem]">
			<HoverCursor colorTheme="dark" cursorText="CHECK IT OUT" link="https://queenslab.co/en/">
				<li class="p-12 flex gap-4 items-center">
					<img src="/queenslab.png" alt="QueensLab webpage" class="w-2/3" />
					<div class="w-1/3">
						<h3 class="text-center text-white text-4xl">QUEENSLAB</h3>
						<p class="text-center text-white">SVELTEKIT</p>
						<p class="text-center text-white">PAYLOAD</p>
						<p class="text-center text-white">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
	</ul>
</section>
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
	<div class="absolute right-0 bottom-0">
		<div class="z-0 overflow-clip w-screen h-screen">
			<Tram />
		</div>
		<div class=" z-10 absolute w-72 top-28">
			<Tramstop />
		</div>
	</div>
	<h1 class="text-6xl text-center text-white font-bold">THIS IS A TRAM</h1>
</section>
