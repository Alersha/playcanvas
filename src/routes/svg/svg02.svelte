<script>
    import { onMount } from 'svelte';

    let canvas;
    let a = [40, 90];
    onMount(() => {
        const ctx = canvas.getContext("2d");

        

        // set line stroke and line width
                ctx.strokeStyle = 'red';
                ctx.lineWidth = 5;

                // draw a red line
                ctx.beginPath();
                ctx.moveTo(a[0], a[1]);
                ctx.lineTo(300, 100);
                ctx.stroke();

})
    
</script>
<canvas bind:this={canvas}
    width={300}
    height={300}
></canvas>
<p>line start at x: {a[0]} and y: {a[1]}</p>


