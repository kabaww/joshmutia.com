<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';
    import { fly, slide } from 'svelte/transition';
    import { expoOut, expoIn, quintIn } from 'svelte/easing';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();
    let loaded = false;

	// Base Classes
	const cBase = 'relative w-modal-wide shadow-xl';
	const cButton = 'absolute -top-3 -right-3 z-10 btn-icon variant-filled-error';
	const cIframe = 'bg-surface-600 w-full aspect-video rounded-container-token overflow-hidden';


</script>

<!-- @component This example creates an embedded video modal. -->

{#if $modalStore[0]}
    <div class="flex flex-col size-full items-center">
        <div class="{cBase}">
            <button class={cButton} on:click={parent.onClose}>✕</button>
            <!-- <Vimeo vimeoId={$modalStore[0].meta.video} /> -->
            <div class={cIframe}>
                <iframe
                    class={`${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-bruh rounded-container-token`}
                    title={$modalStore[0].meta.title}
                    src={`https://player.vimeo.com/video/${$modalStore[0].meta.video}?autoplay=false#t=0h0m0s`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={`
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        `}
                    on:load={()=> loaded = true}
                ></iframe>
                {#if !loaded}
                    <div out:fly={{duration: 500, y: 200, easing : expoIn}} class="flex size-full">
                        <svg class="animate-spin stroke-white fill-primary-500 self-center mx-auto w-24 h-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"/></svg>
                    </div>
                {/if}
            </div>
        </div>
        <div class="flex flex-col align-center text-center mt-8">
            <div class="h4">{$modalStore[0].meta.title}</div>
            <div class="text-xs">{$modalStore[0].meta.subtitle}</div>
        </div>
    </div>
{/if}