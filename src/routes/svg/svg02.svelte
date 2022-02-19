<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';


    let canvas;
    let canvas2;
    let a = [40, 90];
    onMount(() => {
        const ctx = canvas.getContext("2d");

        

        // set line stroke and line width
                ctx.strokeStyle = 'red';
                ctx.lineWidth = 2;

                // draw a red line
                ctx.beginPath();
                ctx.moveTo(a[0], a[1]);
                ctx.lineTo(300, 100);
                ctx.stroke();


    //////////////PlayCanvas
    const app = new pc.Application(canvas2, {
            /* mouse: new pc.Mouse() */
        });
        app.start();

        const box = new pc.Entity();
        box.addComponent('render', {
            type: 'box'
        })
        app.root.addChild(box);
        let boxposx = box.getPosition();
        console.log(boxposx);
        let boxposx2 = box.getLocalPosition();
        console.log(boxposx2);

        // create camera entity
        const camera = new pc.Entity('camera');
        camera.addComponent('camera', {
            clearColor: new pc.Color(0.3, 0.7, 0.1)
        });
        
        // add camera to root
        app.root.addChild(camera);
        camera.setPosition(0, 0, 3);

        // create directional light entity
        const light = new pc.Entity('light');
        light.addComponent('light');
        app.root.addChild(light);
        light.setEulerAngles(45, 0, 0);

})
    
</script>
<canvas bind:this={canvas}
    width={400}
    height={300}
></canvas>
<canvas bind:this={canvas2} 
    width={400}
    height={300}
    style="position:absolute; top:0px; left:0px; z-index:-2"
></canvas>
<p>line start at x: {a[0]} and y: {a[1]}</p>


