<script>
    import { onMount } from 'svelte';

    let photos = [];

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=5`);
        photos = await res.json();
    })
</script>

<h1>Photo Album</h1>

<div>
    {#each photos as photo}

    <figure>
        <img src={photo.thumbnailUrl} alt={photo.title} />
        <figcation>{photo.title}</figcation>
    </figure>
    {:else}
    <p>... loading</p>
    {/each}
</div>