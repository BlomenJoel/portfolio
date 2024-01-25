<script lang="ts">
	import { browser } from '$app/environment';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let cursorText: string,
		colorTheme: 'dark' | 'light' = 'dark';

	let element: HTMLElement | null = null;

	// if text is long enough to be on two rows
	const getYPadding = () => (cursorText.length >= 9 ? '30px' : '39px');
	const isDarkTheme = colorTheme === 'dark';

	onMount(() => {
		if (browser) {
			const cursorAnimation = document.querySelector('.cursor-animation');

			if (element) {
				element.addEventListener('mouseenter', () => {
					gsap.to(cursorAnimation, {
						height: '100px',
						width: '100px',
						padding: `${getYPadding()} 10px`,
						innerText: cursorText,
						color: isDarkTheme ? 'white' : 'black',
						ease: 'elastic',
						filter: 'none',
						mixBlendMode: 'normal',
						backgroundColor: isDarkTheme ? 'black' : 'white'
					});
				});

				element.addEventListener('mouseleave', () => {
					gsap.to(cursorAnimation, {
						height: '30px',
						width: '30px',
						innerText: '',
						ease: 'elastic',
						padding: '0px',
						filter: 'invert(1)',
						mixBlendMode: 'difference'
					});
				});
			}
		}
	});
</script>

{#if cursorText}
	<div bind:this={element}>
		<slot />
	</div>
{:else}
	<slot />
{/if}
