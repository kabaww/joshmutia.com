<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import { fade, fly } from 'svelte/transition';
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
    import path from 'path';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
    import LightboxModal from '$lib/components/LightboxModal.svelte';
	initializeStores();

	const modalRegistry = {
		lightbox : { ref: LightboxModal }
	};

	let styling = (path : string)=> {
		switch (path) {
			case '/vid':
				return 'bg-primary-500/5';
			case '/dev':
				return 'bg-secondary-500/5';
			default:
				return 'bg-transparent';
		}
	};

	let transition = (path : string) => {
		switch (path) {
			case '/vid':
				return { in : {delay: 250, duration: 250, x: -100}, out: {duration: 250, x: 100}};
			case '/dev':
				return { in : {delay: 250, duration: 250, x: 100}, out: {duration: 250, x: -100}};
			default:
				return { in : {delay: 250, duration: 250, y: 100}, out: {duration: 250, y: 100}};
		}
	};

	export let data;

</script>

<Modal components={modalRegistry}/>
<div class="w-full h-full {styling(data.pathname)} transition-colors duration-500 ease-bruh overflow-x-hidden" id="bg-layer">
	<div class="w-full h-full bg-polkadots">
		<div class="absolute top-0 left-0 text-xs self-center opacity-10 -mt-1 p-4">art is for others</div>
		<div class="absolute top-0 right-0 text-xs self-center opacity-10 -mt-1 p-4">art is for others</div>
		<div class="hidden sm:block absolute bottom-0 right-0 text-xs self-center opacity-10 -mt-1 p-4">art is for others</div>
		<div class="hidden sm:block absolute bottom-0 left-0 text-xs self-center opacity-10 -mt-1 p-4">art is for others</div>

	
		<Navbar {data}/>
		{#key data.pathname}
			<div in:fly={transition(data.pathname).in} out:fly={transition(data.pathname).out}>
			<!-- <div in:fly={{delay: 250, duration: 250, y: 100}} out:fly={{duration: 250, y: 100}}> -->
				<slot />
			</div>
		{/key}
		<Footer />
	</div>
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

