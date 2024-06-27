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
	<script type='text/javascript'>
		window.smartlook||(function(d) {
		  var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
		  var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
		  c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
		  })(document);
		  smartlook('init', 'd9b3ce86998c1eb828e2c1adf10af0f143aaad38', { region: 'eu' });
	  </script>
</div>
