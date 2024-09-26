<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

    import { Vimeo } from 'sveltekit-embed'

	const modalStore = getModalStore();
    

	// Base Classes
	const cBase = 'relative w-modal-wide shadow-xl';
	const cButton = 'absolute -top-3 -right-3 z-10 btn-icon variant-filled-error';
	const cIframe = 'bg-black w-full aspect-video rounded-container-token overflow-hidden';
</script>

<!-- @component This example creates an embedded video modal. -->

{#if $modalStore[0]}
	<div class="{cBase}">
		<button class={cButton} on:click={parent.onClose}>✕</button>
        <Vimeo vimeoId={$modalStore[0].meta.video} />
	</div>
{/if}