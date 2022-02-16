<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    let canvas;
    let width = 1;
    let height = 1;
    let depth = 1;

    let spin = 0;
    let spin2 = 1;
    SC.onFrame(() =>{
        spin += 0.005;
        spin2 += 0.002;
    });

    // for playcanvas
    let box = {
        name: " "
    };

    onMount(() => {
        /* const canvas1 = document.getElementById('canvas1') */;
        const app = new pc.Application(canvas, {
            mouse: new pc.Mouse(canvas)
        });
        app.start();
        // box
        box = new pc.Entity();
        box.addComponent("render", {
        type: "box",
            });
        box.name = 'Box';
        box.setLocalScale(1, 1, 1)
        app.root.addChild(box);
        
        let boxmat = new pc.PhongMaterial();
        boxmat.diffuse.set(0.4, 0.58, 0.86);
        box.render.material = boxmat;
        box.setPosition(2, 0, 0);
        console.log(box);
        ////////////////////////////////////////////////
        // create camera entity ////////////////////
        const camera = new pc.Entity("camera");
            camera.addComponent("camera", {
                clearColor: new pc.Color(0.1, 0.7, 0.8),
            });
            app.root.addChild(camera);
            camera.setPosition(0, 0, 5);

        // create directional light entity
            const light = new pc.Entity("light");
            light.addComponent("light");
            app.root.addChild(light);
            light.setEulerAngles(45, 0, 0);
            //////////////////////////////////////////////

    })


</script>
<div>Head</div>
<div>
    <!-- <canvas id="canvas01"></canvas> -->
    <canvas bind:this={canvas}></canvas>
</div>
<div class="canvastest">
    <div>pre Canvas</div>
    <!-- <canvas bind:this={canvas}> -->
    <SC.Canvas antialias background={new THREE.Color('papayawhip')} width=400 height=200
    fog={new THREE.FogExp2('papayawhip', 0.1)} shadows
    >
        <SC.Mesh geometry={new THREE.BoxGeometry()} 
                    scale={[width, height, depth]}
                    rotation={[0, 0, 0]}
        />
        <SC.PerspectiveCamera position={[1, 1, 3]} />
        
        <SC.OrbitControls enableZoom={true} />
        <SC.AmbientLight intensity={0.6} />
        <SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

    </SC.Canvas>
<!-- </canvas> -->
    <div class="controls">
        <label><input type="range" bind:value={width} min={0.1} max={3} step={0.1} /> width</label>
        <label><input type="range" bind:value={height} min={0.1} max={3} step={0.1} /> height</label>
        <label><input type="range" bind:value={depth} min={0.1} max={3} step={0.1} /> depth</label>
    </div>
    <div>foot Canvas</div>
</div>
<div>Footer</div>

<style>
    .controls {
        /* width: 50%;
        height: 400px; */
        position: absolute;
        top: 250px;
    }
</style>
