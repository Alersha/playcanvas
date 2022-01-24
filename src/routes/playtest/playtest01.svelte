<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() =>{
        // create canvas

        const canvas = document.getElementById('canvas01');
        const app = new pc.Application(canvas);

        // fill the available space at full resolution
        app.setCanvasFillMode(pc.FILLMODE_NONE, 500, 300);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);

        // ensure canvas is resized when window changes size
        window.addEventListener('resize', () => app.resizeCanvas());

        // create box entity
        const elem01 = new pc.Entity();
        elem01.addComponent('model', {
            type: 'sphere'
        });
        app.root.addChild(elem01);
        elem01.setPosition(0, 0, 0);
        /* box.translate(-1, 0, 0); */

        // create element 02

        const elem02 = new pc.Entity()
        elem02.addComponent('model', {
            type: 'box'
        })

        app.root.addChild(elem02);
        elem02.setPosition(-1, 0, 0);

        // Create elem01's material
        var boxMaterial = new pc.PhongMaterial();
            boxMaterial.diffuse.set(0, 0.58, 0.86);
            /* boxMaterial.update(); */
            elem01.model.model.meshInstances[0].material = boxMaterial;
            /* box.translate(-2, 0, 0); */

        // Create elem02's material

        var elem02Material = new pc.PhongMaterial();
            elem02Material.diffuse.set(4, 0.4, 0.7);
            /* elem02Material.update(); */
            elem02.model.model.meshInstances[0].material = elem02Material;

        // Change the entity's rotation in local space
        var e = elem02.getLocalEulerAngles();
        elem02.setLocalEulerAngles(e.x, e.y + 65, e.z + 15);


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

        // timer
        let timer = 0;

        // rotate the box according to the delta time since the last frame
        app.on('update', function(dt) {
            
            timer += dt;
            elem01.rotate(10 * dt, 20 * dt, 30 * dt);
            elem01.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
            elem02.setLocalPosition(-1, Math.sin(timer), 0);

        // animatePosition

            /* var AnimatePosition = pc.createScript('animatePosition'); */
            /* elem02.addComponent("script"); */

            // load from assets script
                /* app.assets.loadFromUrl('/js/animate-position.js', 'script', function (err, asset) {
                elem02.addComponent('script');
                elem02.script.create('AnimatePosition');
                }); */
        });

        app.start();
    })


</script>

<div class="">HOme - <a href="/">here</a></div>
<canvas id='canvas01' width="300px" height="300px"></canvas>
<div class="">test 2 //</div>


