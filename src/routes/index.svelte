<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';
    


    
    

    onMount(() => {
        // create button from pcui

        /* const helloWorldButton = new Button({
            text: 'Click Me',
            id: 'buttonid'
        }); */
        /* let button01 = document.createElement(helloWorldButton); */
        /* button01.id = 'button01'; */
        /* document.body.appendChild(helloWorldButton.dom); */
        /* button01.innerHTML = 'testbutton'; */
        
        
        
        // create a PlayCanvas application
        
        const canvas = document.getElementById('application');
        const app = new pc.Application(canvas);
        // fill the available space at full resolution
        app.setCanvasFillMode(pc.FILLMODE_NONE, 300, 300);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);

        // ensure canvas is resized when window changes size
        window.addEventListener('resize', () => app.resizeCanvas());

        // create box entity
        const box = new pc.Entity();
        box.addComponent('model', {
            type: 'box'
        });
        app.root.addChild(box);
        box.setPosition(-0.4, 0, 0)
        /* box.translate(-1, 0, 0); */

        // Create cube's material
            var boxMaterial = new pc.PhongMaterial();
            boxMaterial.diffuse.set(0, 0.58, 0.86);
            boxMaterial.update();
            box.model.model.meshInstances[0].material = boxMaterial;
            /* box.translate(-2, 0, 0); */

        // create camera entity
        const camera = new pc.Entity('camera');
        camera.addComponent('camera', {
            clearColor: new pc.Color(0.3, 0.7, 0.1)
        });
        app.root.addChild(camera);
        camera.setPosition(0, 0, 3);

        // create directional light entity
        const light = new pc.Entity('light');
        light.addComponent('light');
        app.root.addChild(light);
        light.setEulerAngles(45, 0, 0);
        let timer = 0;
        // rotate the box according to the delta time since the last frame
        app.on('update', function(dt) {
            
            timer += dt;
            box.rotate(10 * dt, 20 * dt, 30 * dt);
            box.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
        
        }
        
        );

        app.start();

        /* var obj = new EventHandlerSubclass();

        // subscribe to an event
        obj.on('hello', function (str) {
            console.log('event hello is fired', str);
        });

        // fire event
        obj.fire('hello', 'world'); */
    }) 
</script>

<div>accordion <a href="/components/accordion">accordion</a></div>

<div class="">Test 1 - <a href="/playtest/playtest01">here</a></div>

<div class="">Test 2 - <a href="/playtest/playtest02">add html label to 3d</a></div>
<div class="">Test 3 - <a href="/playtest/playtest03">here</a></div>
<div class="">Test 4 - <a href="/playtest/playtest04">example how add script to entity</a></div>
<div class="">Test 5 - <a href="/playtest/playtest05">here</a></div>
<div class="">Test 6 - <a href="/playtest/playtest06">here particle system</a></div>
<div class="">Test 7 - <a href="/playtest/playtest07">img as a texture</a></div>
<div class="">Test 8 - <a href="/playtest/playtest08">here other Particle System</a></div>
<div class="">Test 9 - <a href="/playtest/playtest09">phisika</a></div>
<div class="">Test 10 - <a href="/playtest/playtest10">mouse event</a></div>
<div class="">Test 11 - <a href="/playtest/playtest11">other mouse event</a></div>
<div class="">Test 12 - <a href="/playtest/playtest12">simple test</a></div>
<div class="">Test 13 - <a href="/playtest/playtest13">obj loader</a></div>
<div class="">+++++++++++++++++++++++++++++++++++++++++</div>
<div class="">Test Assets - <a href="/assets/assets01">Assets</a></div>
<div class="">Test Assets 02 - <a href="/assets/assets02">Assets 02</a></div>
<!-- <canvas id='application' width="300px" height="300px"></canvas> -->
    <div class="m-3">
        <p>serios of test project 2

        </p>

<div class="">proba 01 <a href="/proba/proba01">table</a></div>
<div class="">proba 02 <a href="/proba/proba02">trois</a></div>
<div class="">proba 03 <a href="/proba/proba03">svelte-particles</a></div>
<div class="">proba 04 <a href="/proba/proba04">tsparticles</a></div>

    </div>
<div>
   <!--  <img src="logoSTS_01.svg" width="300" height="300" alt=""/> -->
    
</div>
<div>
   
</div>

<style>



</style>
