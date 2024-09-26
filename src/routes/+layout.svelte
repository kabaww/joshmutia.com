<script lang="ts">
    import { page } from '$app/stores';
    import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let styling : string;

	$ : {
		let currentPage = $page.route.id;
		if (currentPage === '/vid') {
			// styling = 'bg-gradient-to-br from-primary-500/10';
			styling = 'bg-primary-500/5'
			
		} else if (currentPage === '/dev') {
			// styling = 'bg-gradient-to-bl from-secondary-500/10';
			styling = 'bg-secondary-500/5'
		} else {
			styling = 'bg-transparent';
		}
		console.log(styling, currentPage);
	}

</script>

<div class="w-full h-full {styling} transition-colors duration-500 ease-bruh" id="bg-layer">
	<Navbar />
	<slot />
</div>




<!-- <script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import { fade } from 'svelte/transition';
    import { expoInOut  } from 'svelte/easing';
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let transitioning = false;
	$: {
		transitioning = true;
		change($page.route.id, 500);
		console.log("transitioning");
	};
	
	function change(c, timeout) {
		setTimeout(() => {
			transitioning = false;
			console.log("done transitioning");
		}, timeout);
	}

</script>

<Navbar />
{#if !transitioning}
	<div in:fade={{ delay: 0, duration: 500 , easing: expoInOut}}>
		<slot />
	</div>
{/if} -->

