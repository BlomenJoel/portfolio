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
	<script type="text/javascript">
		window._mfq = window._mfq || [];
		(function () {
			var mf = document.createElement('script');
			mf.type = 'text/javascript';
			mf.defer = true;
			mf.src = '//cdn.mouseflow.com/projects/3db6816d-61a0-48ba-ae4b-240164f61c57.js';
			document.getElementsByTagName('head')[0].appendChild(mf);
		})();
	</script>
</div>
