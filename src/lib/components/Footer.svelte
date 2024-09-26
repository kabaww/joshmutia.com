<script>
    import Icon from './Icon.svelte';
    let icons = [
        { name: 'youtube', link: 'https://youtube.com/@JoshMutia', extraClass: 'hover:text-error-500 text-[20px]' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/joshmutia/', extraClass: 'hover:text-secondary-600' },
        { name: 'instagram', link: 'https://instagram.com/waterrmellonne', extraClass: 'hover:text-tertiary-500' },
        { name: 'github', link: 'https://github.com/kabaww', extraClass: 'hover:text-secondary-900' },
    ]
</script>

<div class="flex flex-col sm:items-center sm:w-svw bottom-0 fixed">
    <div class="flex flex-col p-3 w-fit shadow-xl bg-surface-100-800-token opacity-90 sm:rounded-t-xl rounded-tr-xl">
        <div class="flex flex-row justify-between items-center gap-4 text-inherit">
            {#each icons as { name, link, extraClass }}
                <Icon {name} {link} class={`transform-gpu hover:-translate-y-0.5 transition-all duration-500 ease-bruh ${extraClass}`} />
            {/each}
            <!-- <div class="text-sm">Made with 💖</div> -->
        </div>
    </div>
</div>

