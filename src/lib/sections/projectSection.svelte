<script lang="ts">
	import HoverCursor from '$lib/components/cursor/HoverCursor.svelte';
</script>

<section class="p-8 md:p-24 md:pr-36 pr-16 bg-main flex flex-col items-center" id="projects">
	<h1 class="text-6xl text-center text-white font-bold">SELECTED PROJECTS</h1>
	<ul class="flex flex-row gap-4 flex-wrap justify-center w-full">
		<div class="ml-auto w-[40rem]">
			<HoverCursor colorTheme="dark" cursorText="CHECK IT OUT" link="https://raformat.se/sv/">
				<li class="p-12 flex gap-4 items-center">
					<img src="/raformat.png" alt="raformat webpage" class="w-2/3" />
					<div class="w-1/3">
						<h3 class=" text-white text-4xl font-bold">RÅFORMAT</h3>
						<p class=" text-white">SVELTEKIT</p>
						<p class=" text-white">PAYLOAD</p>
						<p class=" text-white">GSAP</p>
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
						<h3 class=" text-white text-4xl font-bold">BELID LIGHTNING GROUP</h3>
						<p class=" text-white">SVELTEKIT</p>
						<p class=" text-white">PAYLOAD</p>
						<p class=" text-white">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
		<div class="mx-auto w-[40rem]">
			<HoverCursor colorTheme="dark" cursorText="CHECK IT OUT" link="https://queenslab.co/en/">
				<li class="p-12 flex gap-4 items-center">
					<img src="/queenslab.png" alt="QueensLab webpage" class="w-2/3" />
					<div class="w-1/3">
						<h3 class=" text-white text-4xl font-bold">QUEENSLAB</h3>
						<p class=" text-white">SVELTEKIT</p>
						<p class=" text-white">PAYLOAD</p>
						<p class=" text-white">GSAP</p>
					</div>
				</li>
			</HoverCursor>
		</div>
	</ul>
</section>
