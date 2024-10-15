<script lang='ts'>

    import Icon from "$lib/components/Icon.svelte";

    export let triggerModal;

    export let item

    let extraClasses;
    export { extraClasses as class };

</script>
<div class={`${extraClasses} card rounded-lg overflow-hidden variant-glass-primary dark:variant-soft-primary text-base-token dark:text-dark-token border-secondary-500 dark:border-secondary-300 border-2`}>
    <!-- bg-surface-600 dark:bg-primary-300 text-primary-300 dark:text-surface-600 -->
    <div class="flex flex-col size-full overflow-hidden">
        <button class="size-full relative hover:brightness-150 hover:scale-105 transition-all duration-500 ease-bruh" on:click={triggerModal(item)}>
            <img class="size-full object-cover" src="https://ik.imagekit.io/joshmutia/joshmutia.com/duotone/editbts.png" alt="Davinci Resolve" />
            <div class="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex-col text-[#b8662d]">
                <!-- <h1 class="text-5xl font-black">3D</h1> -->
                <h1 class="text-5xl h1">3D DEMO REEL</h1>
            </div>
        </button>
        <div class="flex px-5 py-4">
            <div class="flex flex-col size-full items-start content-between">
                <div class="text-xs sm:text-2xl">video editing</div>
                <hr class="!border-t-[2px] !border-dotted w-[50%] !border-t-surface-600/30 dark:!border-t-surface-300/30" />
                <div class="flex gap-2 mt-2">
                    <Icon name="davinci" class="text-2xl sm:text-4xl" />
                    <Icon name="adobe" class="text-2xl sm:text-4xl" />
                </div>
            </div>
            <div class="flex flex-col size-full items-end content-between">
                <div class="text-xs sm:text-2xl">animation</div>
                <hr class="!border-t-[2px] !border-dotted w-[50%] !border-t-surface-600/30 dark:!border-t-surface-300/30" />
                <div class="flex gap-2 mt-2">
                    <Icon name="unreal" class="text-2xl sm:text-4xl" />
                    <Icon name="blender" class="text-2xl sm:text-4xl" />
                </div>
            </div>
        </div>
        
    </div>
</div>