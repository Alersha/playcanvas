<script>
    /* import * as pc from 'playcanvas'; */
    import { onMount } from 'svelte';
   /*  import Testmodel from '$lib/10602020'; */
   /* import test10602020 from '../components/test10602020.svelte'; */
   import Testmodel from '$lib/10602020.json';

   let meshes = Testmodel.meshes;

    
    let canvas;

    /* let testjsonurl = '/models/106-02-020.gltf';
    let testjsonparse = JSON.parse(testjsonurl); */
    console.log(Testmodel.meshes[0]);
    
    onMount(() =>{

        // Create the app and start the update loop
        /* const canvas = document.getElementById('application-canvas'); */
        const app = new pc.Application(canvas, {});

        app.scene.ambientLight = new pc.Color(0.5, 0.5, 0.5);

        const objurl = "/models/085214.obj";
        const scripturl = "/js/obj-model.js";

let entity;
app.assets.loadFromUrl(scripturl, "script", function () {
    // OBJ Parser is not enabled by default in engine. Add the parser to the model resource handler
    // set up obj parser
    app.loader
        .getHandler("model")
        .addParser(new ObjModelParser(app.graphicsDevice), function (url) {
            return pc.path.getExtension(url) === ".obj";
        });

    app.assets.loadFromUrl(objurl, "model", function (err, asset) {
        app.start();

        entity = new pc.Entity();
        entity.addComponent("model");
        entity.model.model = asset.resource;
        app.root.addChild(entity);

        // add a randomly generated material to all mesh instances
        const mis = entity.model.model.meshInstances;
        for (let i = 0; i < mis.length; i++) {
            mis[i].material = new pc.StandardMaterial();
            mis[i].material.diffuse = new pc.Color(
                pc.math.random(0, 1),
                pc.math.random(0, 1),
                pc.math.random(0, 1)
            );
            mis[i].material.update();
        }
    });
});

// Create an Entity with a camera component
const camera = new pc.Entity();
camera.addComponent("camera", {
    clearColor: new pc.Color(0.1, 0.2, 0.3),
});

camera.translate(0, 0, 300);
app.root.addChild(camera);

// Create an Entity with a omni light component
const light = new pc.Entity();
light.addComponent("light", {
    type: "omni",
    color: new pc.Color(1, 1, 1),
    range: 100,
});

light.translate(5, 0, 15);
app.root.addChild(light);

app.on("update", function (dt) {
    if (entity) {
        entity.rotate(0, 22 * dt, 0);
    }
});

    });
</script>

<!-- <svelte:head>
    <script src="/js/obj-model.js"></script>
</svelte:head> -->
<div class="play-grid">

    <div>111</div>
    <div>head2</div>
    <div>head3</div>
    <div>cont1

        {#each meshes as mesh }

        <p class="mesh">{mesh.name}</p>
            
        {/each}
    </div>
<canvas bind:this={canvas}
        width={450}
        height={300}

></canvas>
<div>cont3</div>
<div>foot {Testmodel.meshes[1].name}</div>

</div>

<!-- <canvas id="application-canvas"></canvas> -->

<style>
    .play-grid {
        display: grid;
        grid-template-areas: 
                            "play-head1 play-head2 play-head3"
                            "play-cont1 play-cont2 play-cont3"
                            "play-foot play-foot play-foot";
        
    }

    .mesh {
        padding: 10px;
        background-color: "red";
    }
</style>