<script context="module">
    let p = document.createElement('p');
    p.innerHTML = 'test from script with context="module"';
    document.body.appendChild(p);
    
    /* const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
		ctx.rect(10, 10, 100, 100);
		ctx.fill(); */
</script>

<!-- <script>

    let canvas;
let a = 1;
$: b = a + 1;
</script> -->

<!-- <div>{a} and {b}</div> -->


     

     <!-- <canvas 
     bind:this={canvas}
     id="canvas"></canvas> -->

<style>
    canvas {
        border: 1px solid rgb(69, 214, 69);
    }
</style>