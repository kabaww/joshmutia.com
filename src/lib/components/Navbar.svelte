<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';

    export let data;

    let styles = {
        vid: {
            unselected : 'hover:text-primary-500',
            selected : 'hover:text-inherit text-primary-500'
        },
        dev: {
            unselected : 'hover:text-secondary-500',
            selected : 'hover:text-inherit text-secondary-500'
        },
    }

</script>

<div class="container mx-auto px-4 pb-4 pt-[20vh] sm:pt-24 sm:px-0">

    <div class="hidden sm:block">
        <div class="container mx-auto justify-between flex">
            <LightSwitch />
            <div class="transform-gpu scale-[-1]">
                <LightSwitch />
            </div>
        </div>
    </div>

    <div class="fixed sm:hidden bg-surface-500 dark:bg-surface-100 p-3 bottom-0 right-0 rounded-tl-2xl z-10" >
        <LightSwitch />
    </div>

    <div class="flex gap-5 text-center justify-between items-center pt-2">
        <h1 class="transition-color duration-1000 ease-bruh h1 underline {data.pathname === '/vid' ? styles.vid.selected : styles.vid.unselected}"><a href='/vid'>VID</a></h1>
        <div class="hidden sm:block">
            <h1 class="transition-all duration-1000 ease-bruh anton-font h3 origin-center transform-gpu scale-x-3x hover:scale-x-4x"><a href='/'>JOSH MUTIA</a></h1>
        </div>
        <div class="block sm:hidden">
            <a href='/'>
                <div class="flex flex-col transform-gpu scale-x-3x bg-surface-900 dark:bg-white text-surface-100 dark:text-surface-900 anton-font h4 p-1 pt-3 pb-3">
                    <p>JLM</p>
                    <p class="-mb-3 -mt-3">JLM</p>
                    <p>JLM</p>
                </div>
            </a>
        </div>
        <h1 class="transition-color duration-1000 ease-bruh h1 underline {data.pathname === '/dev' ? styles.dev.selected : styles.dev.unselected}"><a href='/dev'>DEV</a></h1>
    </div>

</div>