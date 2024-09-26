<script>

    import { popup } from "@skeletonlabs/skeleton";

</script>
<style>

</style>

<div class="container mx-auto flex flex-col">
    <div class="h1 text-center mt-10">WORK IN PROGRESS</div>
    <div class="h1 text-center mt-10">🏗️🚧🚧🚧🛠️</div>

    <div data-popup="websitehint" class="card p-2.5 mt-2.5 w-fit shadow-xl variant-filled-success">me 😎</div>
    <button class="text-xs self-center mt-5" use:popup={{event: 'click', target: 'websitehint', placement: 'bottom'}} >who made this website?</button>

</div>