<script>
    import { onMount } from 'svelte';
    /* export const ssr = false; */
    /* import { browser } from '$app/env'; */
    let canvas;
    let width;
    
    let test2 = 'hello test';
    /* let a = 1; */
    /* document.body.appendChild(test); */
    let a = 3;
    $: sum = test2 + ' ' + a;
    onMount(() => {
        
        test.innerHTML = 'test через id как переменная';
        
        const ctx = canvas.getContext("2d");
        
        
        ctx.rect(140, 20, 88, 30);
        ctx.fillStyle = "red";
        ctx.fill();
        let aa = new Path2D();
        aa.rect(40, 120, 100, 13);
        ctx.fillStyle = "green";
        ctx.fill(aa);
        
        // Create circle
            const circle = new Path2D();
            circle.arc(350, 75, 50, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill(circle);

            // create line

            let line1 = new Path2D();
            line1.moveTo(10, 100);
            line1.lineTo(40, 100);


            /* line1.stroke(); */

            // Первый путь
                ctx.beginPath();
                ctx.strokeStyle = 'blue';
                ctx.lineWidth = 15;
                ctx.moveTo(20, 220);
                ctx.lineTo(200, 220);
                ctx.stroke(20, 220, 200, 220);

});
    
</script>


<!-- {#if browser}<body></body>{/if} -->
<canvas
bind:this={canvas}
width={600}
height={350}

>
</canvas>
<!-- <canvas></canvas> -->
<p id="test"></p><p>{a}</p>
<p>{sum}</p>
<div><input type="range" bind:value={a} min={0.1} max={3} step={0.1}/></div>

<style>
    canvas {
        position: absolute;
        z-index: -1;
        border: 1px solid rgb(69, 214, 69);
        background-color: rgb(195, 196, 160);
    }
    p {
        margin: 5px;
    }
</style>