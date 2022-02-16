<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    let canvas;
    onMount(() => {
        const app = new pc.Application(canvas, {
            mouse: new pc.Mouse()
        });
        app.start();

        const box = new pc.Entity();
        box.addComponent('render', {
            type: 'box'
        })
        app.root.addChild(box);

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
<canvas bind:this={canvas}></canvas>