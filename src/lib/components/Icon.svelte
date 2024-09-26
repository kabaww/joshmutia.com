<script lang="ts">
    export let name;
    export let link;
    let classes = "";
    export { classes as class };

    let icons = [
        { name : 'github', glyph: "eab0"},
        { name: 'instagram', glyph: "ea92"},
        { name: 'youtube', glyph: "ea9d"},
        { name: 'linkedin', glyph: "eac9"},
    ]

    let displayIcon = icons.find(icon => icon.name === name);
    let parsedGlyph = displayIcon ? String.fromCharCode(parseInt(displayIcon.glyph, 16)) : name;

</script>

{#if link}
    <a href={link} class={`icomoon ${classes}`}>{parsedGlyph}</a>
{:else}
    <span class={`icomoon ${classes}`}>{parsedGlyph}</span>
{/if}