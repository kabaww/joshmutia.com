<script lang="ts">
    import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
    import VidPageCard from "./VidPageCard.svelte";
    import { vidWorks as items } from "./vid-works";
    import { onMount } from "svelte";
    let modalStore = getModalStore();

    let triggerModal : (item: any) => null;

    onMount(() => {
        console.log('vid page mounted')
        triggerModal = (item) => {
            console.log('opening modal for ', item)
            modalStore.trigger({
                type: 'component',
                component: 'lightbox',
                meta: {
                    video: item.video,
                    title: item.title
                }
            } as ModalSettings );

            return null;
        }

    });

</script>

<div class="container mx-auto p-4 mb-8 sm:p-0">
    <div class="grid grid-rows-[8] sm:grid-rows-3 grid-cols-2 sm:grid-cols-4 grid-flow-row sm:grid-flow-col gap-4 sm:h-[60vh] h-full">

        {#each items as item}
            {#if item.component}
                <VidPageCard class={item.class} />
            {:else}
                <button class={`rounded-lg overflow-hidden ${item.class}`} on:click={triggerModal(item)}>
                    <img src={item.img} alt={item.title} class={`object-cover object-center size-full hover:brightness-150 hover:scale-105 transition-all duration-500 ease-bruh`} />
                </button>
            {/if}

        {/each}

    </div>
</div>