<script lang="ts">
	import Cursor from '$lib/components/cursor/Cursor.svelte';
	import Menu from '$lib/components/menu.svelte';
	import '../app.css';
</script>

<Cursor />

<div class="flex">
	<div class="w-full flex flex-col">
		<slot />
	</div>
	<Menu />
</div>
