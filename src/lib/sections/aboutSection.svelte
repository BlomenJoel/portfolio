<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Tram from '$lib/components/tram.svelte';
	import Tramstop from '$lib/components/tramstop.svelte';
</script>

<section
	class="flex min-h-screen flex-col gap-8 items-center relative bg-secondary p-8 md:p-24 md:pr-36 pr-16"
	id="about"
>
	<Header header="WHO AM I" />
	<div class="absolute right-0 top-0 z-0 pointer-events-none h-full">
		<div class="z-0 overflow-clip w-screen min-h-screen h-full">
			<Tram />
		</div>
		<div class=" z-10 absolute w-72 top-28">
			<Tramstop />
		</div>
	</div>
	<div class="flex flex-col gap-8 bg-gray/30 backdrop-blur-sm items-center md:w-1/2 z-40 p-12">
		<p class="text-xl text-center text-white">
			I like coffee, triathlon, wood-working and dogs. My favorite thing is definitly dogs.
		</p>
		<p class="text-xl text-center text-white">
			I have a tramsig <span class="italic text-sm">(silly)</span> humour and ride the tram all day in
			my hometown Gothenburg, Sweden.
		</p>

		<button class="btn rounded-md px-6 py-4"
			><a href="mailto:blomenjoel@gmail.com" class="btn-text font-bold">SAY HELLO!</a></button
		>
	</div>
</section>

<style>
	.btn {
		margin: 20px auto;
		padding: 10px 44px;
		position: relative;
	}
	.btn::before {
		transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.15);
		content: '';
		width: 42%;
		height: 100%;
		background: black;
		position: absolute;
		top: 0;
		left: 0;
	}
	.btn:hover::before {
		background: black;
		width: 100%;
	}
	.btn-text {
		color: white;
		mix-blend-mode: difference;
	}
</style>
