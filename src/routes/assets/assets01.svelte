<script>
    import { onMount } from 'svelte';
    import Getphoto from '../components/getphoto.svelte';

    let canvas;

    onMount(() => {
        var file = {
            filename: "logo.obj",
            url: '/models/logo.obj, /models/logo.mtl'
        };

        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 300, 100);
        


        /* let frame = requestAnimationFrame(loop);

        function loop(t) {
            frame = requestAnimationFrame(loop);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            ctx.fillRect(0, 0, 100, 100);
            ctx.fillStyle = 'red';
        } */
    })
</script>
11
<canvas
    bind:this={canvas}
	width={164}
	height={64}
></canvas>
222
<div>
    <Getphoto />
</div>