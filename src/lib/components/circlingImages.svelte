<script lang="ts">
	const images = ['favicon.png', 'favicon.png', 'favicon.png', 'favicon.png'];
</script>

<div class="absolute rotating flex h-[40rem] w-[40rem] -left-[10rem] top-0">
	{#each images as img, index}
		<img
			src={img}
			alt="img"
			class="absolute w-32 h-3w-32
            {index === 0 && 'top-[16rem] left-0'} 
            {index === 1 && 'top-0 left-[16rem]'} 
            {index === 2 && 'top-[16rem] right-0'} 
            {index === 3 && 'bottom-0 right-[16rem]'} 
            "
		/>
	{/each}
</div>

<style>
	.rotating {
		animation: rotating 20s linear infinite;
	}
	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
