<script lang="ts">
	import Face from '$lib/sections/faceSection.svelte';
	import Projects from '$lib/sections/projectSection.svelte';
	import About from '$lib/sections/aboutSection.svelte';
	import Contact from '$lib/sections/contactSection.svelte';
</script>

<svelte:head>
	<title>🚧Joels portfolio🚧</title>
	<meta property="og:title" content="🚧Joels portfolio🚧" />
	<meta property="twitter:title" content="🚧Joels portfolio🚧" />
	<meta name="description" content="Joel Blomén portfolio" />
	<meta property="og:description" content="Joel Blomén portfolio" />
	<meta property="twitter:description" content="Joel Blomén portfolio" />
	<meta property="og:image" content="%sveltekit.assets%/favicon.png" />
	<meta property="twitter:image" content="%sveltekit.assets%/favicon.png" />
</svelte:head>
<Face />
<Projects />
<About />
