<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';
    /* var pc;
    onMount(async () => {
        const module = await import('playcanvas');
        pc = module.default;
    }) */
    let canvas;
    let changecolorcone;
    let changecolorbox;
    let box = {

        name: '',
    };
    let cone = {
        name: '',
    }
    
    
onMount(() => {
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

            //// cone/////
        cone = new pc.Entity();
        cone.addComponent('render', {
            type: 'cone'
        });
        cone.name = "Cone";
        app.root.addChild(cone);
        let conemat = new pc.PhongMaterial();
        conemat.diffuse.set(0, 7, 3);
        cone.render.material = conemat;
        cone.setPosition(-2, 0, 0);
        cone.setEulerAngles(0, 0, 60);





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

            /* app.on("update", (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt)); */


        /////////////////// Click fo change mat of Cone /////////////////////
            app.mouse.on(pc.EVENT_MOUSEDOWN, changecolorcone);
            changecolorcone = function() {
                /* conemat.deffuse.set(0, 0, 0); */
                /* conemat2 = new pc.PhongMaterial();
                conemat2.diffuse.set(0, 0, 0);
                cone.render.material = conemat2; */
                buttonforchangecolor.style.backgroundColor = 'red';
                conep.style.backgroundColor = "green";
                var obj = pc.app.root.findByName('Cone');
                if (obj && obj.render) {
                var material = obj.render.meshInstances[0].material;
                if (material) {
                    material.diffuse.set(Math.random(), Math.random(), Math.random());
                    
                    material.update(); };
                };
            };
        ////////////////////////////////////////////////////////////////////////////////
        /////////////////// Click fo change mat of Box /////////////////////
            app.mouse.on(pc.EVENT_MOUSEDOWN, changecolorbox);
            changecolorbox = function() {
                /* conemat.deffuse.set(0, 0, 0); */
                /* conemat2 = new pc.PhongMaterial();
                conemat2.diffuse.set(0, 0, 0);
                cone.render.material = conemat2; */
                buttonforchangecolor2.style.backgroundColor = 'red';
                let obj = pc.app.root.findByName('Box');
                if (obj && obj.render) {
                let material = obj.render.material;
                if (material) {
                    material.diffuse.set(Math.random(), Math.random(), Math.random());
                    /* material.diffuse.set(6, 0, 1); */
                    material.update(); };
                };
            };
        ////////////////////////////////////////////////////////////////////////////////
         
});
    
</script>

<div class="absparentdiv">
    <button id="buttonforchangecolor" class="buttoncone" on:click={changecolorcone}
    
    > {cone.name}</button>


    <button id="buttonforchangecolor2" class="buttonbox" on:click={changecolorbox}
    > {box.name}</button>
    

</div>

<!-- <svelte:head>
    <script src='https://code.playcanvas.com/playcanvas-stable.min.js'></script>
</svelte:head> -->
<canvas bind:this={canvas}
        width={600}
        height={350}
>
</canvas>
<div>
    <p id="conep" on:click={changecolorcone}>{cone.name}</p>
    <p id="boxp">{box.name}</p>
</div>

<style>
    .absparentdiv {
        position: absolute;
    }
    .buttoncone {
        position: relative;
        top: 100px;
        left: 100px;
    }
    .buttonbox {
        position: relative;
        top: 70px;
        left: 400px;
    }
</style>