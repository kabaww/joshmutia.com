<script lang="ts">
    import VidPageCard from "./VidPageCard.svelte";

    let items = [
        { img: 'https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/baldeatbrotsa.png?tr:w-auto', title: 'Balde at Brotsa (2022)', subtitle : '', class : 'col-span-2 row-span-1 sm:row-span-1'},
        { img: 'https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/homeroom.png?tr:w-auto', title: 'Homeroom (2020)', subtitle : '', class : 'sm:row-span-1'},
        { img: 'https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/hatol.png?tr:w-auto', title: 'Hatol (2020)', subtitle : '', class : 'row-span-1 sm:row-span-1'},
        { component: true, class : 'sm:row-span-2 row-span-4 text-xs' },
        { img: 'https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/lemondou.png?tr:w-auto', title: 'Lemon Dou', subtitle : '', class : 'row-span-2 sm:row-span-2'},
        { img: 'https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/garuda.png?tr:w-auto', title: 'Garuda Gear', subtitle : '', class : 'row-span-2 sm:row-span-1'},
        { img: 'https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/nike.png?tr:w-auto', title: 'Nike Golf', subtitle : '', class : 'row-span-2 col-span-2 sm:row-span-3'},

    ]

</script>

<div class="container mx-auto p-4 mb-8 sm:p-0">
    <div class="grid grid-rows-[8] sm:grid-rows-3 grid-cols-2 sm:grid-cols-4 grid-flow-row sm:grid-flow-col gap-4 sm:h-[60vh] h-full">

        {#each items as item}
            {#if item.component}
                <VidPageCard class={item.class} />
            {:else}
                <div class={`rounded-lg overflow-hidden ${item.class}`}>
                    <img src={item.img} alt={item.title} class={`object-cover object-center size-full`}/>
                </div>
            {/if}

        {/each}

    </div>
</div>