<script lang='ts'>
    import { fly, blur } from 'svelte/transition';
    import { onMount } from 'svelte';
    import {  expoOut} from 'svelte/easing';
    import { clipboard, popup } from '@skeletonlabs/skeleton';

    let mounted : boolean = false;
    onMount(() => {
        mounted = true;
        console.log('mounted')
    });

    // TODO: finish this
    // function blurFly(node, params) {
    //     const existingTransform = getComputedStyle(node).transform.replace('none', '');

    //     return {
    //         delay: params.delay || 0,
    //         duration: params.duration || 400,
    //         easing: params.easing || cubicOut,
    //         css: (t, u) => `transform-origin: center; transform: ${existingTransform} scaleY(${t}); opacity: ${t};`
    //     };
    // }

</script>
<div class="container mx-auto overflow-clip">
    {#if mounted}
        <div class="flex flex-col align-middle items-center overflow-x-clip">
            <div class="text-5xl sm:text-9xl h1 hover:text-primary-500 focus:text-primary-500 transition-colors ease-bruh duration-500" transition:fly={{ delay: 250, duration: 5000, x: -100, easing: expoOut}}><a href="/vid">VIDEO</a></div>
            <div class="text-5xl sm:text-9xl h1 hover:text-secondary-500 transition-colors ease-bruh duration-500" transition:fly={{ delay: 250, duration: 5000, x: 100, easing: expoOut}}><a href="/dev">WEBDEV</a></div>
            <div class="text-sm italic opacity-50" transition:fly={{ delay: 1000, duration: 5000, y: 100, easing: expoOut}}><a href="https://twitch.tv/kabaww">(and other stuff)</a></div>
        </div>
        <div class="flex flex-col align-middle items-center mt-14" transition:blur={{ delay: 1500, duration: 5000, easing: expoOut}}>
            <div class="anton-font h4">HIRE ME:</div>
            <button use:clipboard={'hello@joshmutia.com'} use:popup={{event: 'click', target: 'copypopup', placement: 'bottom'}}>hello@joshmutia.com</button>
        </div>
        <div class="card p-2.5 mt-2.5 w-fit shadow-xl variant-soft-tertiary" data-popup="copypopup">
	        <div class="arrow bg-success-300" />
            <div><p>Copied to clipboard! 📋</p></div>
        </div>
        <div class="bottom-0 right-0 sm:right-10" transition:fly={{ delay: 1000, duration: 5000, y: 100, x: 100, easing: expoOut}} >
            <img src="https://ik.imagekit.io/joshmutia/JLM/josh-photo-field.png?tr:w-400,h-400,cm-pad_resize,bg-FFFFFF00" class="max-w-[200px] max-h-[200px] sm:max-w-[400px] sm:max-h-[400px] pt-4" alt="me 😎" />
        </div>
    {/if}
</div>
