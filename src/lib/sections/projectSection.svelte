<script lang="ts">
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
</script>

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
