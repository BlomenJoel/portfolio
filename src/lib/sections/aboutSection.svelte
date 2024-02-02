<script lang="ts">
	import CirclingImages from '$lib/components/circlingImages.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<section
	class="h-screen flex flex-col items-center relative bg-secondary p-8 md:p-24 md:pr-36 pr-16"
	id="about"
>
	<Header header="WHO AM I" />
	<p class="text-xl md:w-1/3 text-center text-white font-bold mt-8">
		I LIKE COFFEE, TRIATHLON, WOOD-WORKING AND DOGS. MY FAVORITE THING IS DEFINITLY DOGS!
	</p>
	<p class="text-xl md:w-1/3 text-center text-white font-bold mt-8">
		I ALSO THINK THAT SHOES VERY MUCH SHOWS WHO YOU ARE AS A PERSON, SO HERE'S ALL THE SHOES THAT I
		HAVE.
	</p>
	<CirclingImages />
</section>
