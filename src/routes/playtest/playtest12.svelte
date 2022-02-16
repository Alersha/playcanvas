<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';
    
    let a;
    let testx;
    let testy;
    let nameofentity;
    let canvas;
    let box = {
        name: ''
    };
    /* box.name = 'test Box!' */
    

    onMount(() =>{

        const app = new pc.Application(canvas, {
            mouse: new pc.Mouse(canvas)
        });
        app.start();

    // create box entity /////////////////////
    box = new pc.Entity("cube");
    box.name = 'Test Proba Box!'
    box.addComponent("render", {
        type: "box",
    });
    box.setLocalScale(0.5, 0.5, 0.5)
    app.root.addChild(box);
    /* console.log(box.name); */
    ///////////////////////////////////////////

    // create cone ////
    const cone = new pc.Entity("cone");
    cone.name = "A vot i Cone!!!"
    cone.addComponent("render", {
        type: "cone",
    })
    cone.setLocalScale(0.5, 0.5, 0.5);
    cone.setPosition(-1, 0, 0);
    let matcone = new pc.PhongMaterial();
    matcone.diffuse.set(0, 0.58, 0.86);
    cone.render.material = matcone;
    app.root.addChild(cone);
    /////////

    // create camera entity ////////////////////
    const camera = new pc.Entity("camera");
    camera.addComponent("camera", {
        clearColor: new pc.Color(0.5, 0.6, 0.9),
    });
    app.root.addChild(camera);
    /* camera.setPosition(0, 0, 3); */
    /////////////////////////////////////////////

    // create directional light entity
    const light = new pc.Entity("light");
    light.addComponent("light");
    app.root.addChild(light);
    light.setEulerAngles(45, 0, 0);
    //////////////////////////////////////////////
    
    // mouse event /////
    let debug = document.getElementById('debug');
    app.mouse.on(pc.EVENT_MOUSEDOWN, clickMouse); 
    function clickMouse(e) {
        
        console.log(e);
        
        const {x: eX, y: eY} = e;
        debug.innerHTML = `mouseX : ${eX} and mouseY : ${eY}`;
        let eventclick = document.createElement('div');
        eventclick.id = 'evclick';
        let eventclickid  = document.getElementById("evclick");
        eventclick.innerHTML = `Event on Click mouse! <br /> mouseX : ${eX} and mouseY : ${eY}`
        eventclick.style.backgroundColor = 'green';
        let parentdiv = document.getElementById('parentdiv1');
        
        if(eventclickid)
            {parentdiv.removeChild(eventclickid);
                parentdiv.insertBefore(eventclick, debug);}
            
            else { parentdiv.insertBefore(eventclick, debug); } 
        
        
    };

    a = (e) => { 
            testx = e.x;
            testy = e.y;
            /* box.name = 'new Proba' */
            /* let aa = document.getElementById(debug); */
            debug.style.backgroundColor = 'red';
            /* return eX; */
            
            
    };
    app.mouse.on(pc.EVENT_MOUSEDOWN, a);


    //////////////////////////////////////////////////
    /////////////////////////////////////////////////
    //////////// RayCast ///////////////////////////
    ///////////////////////////////////////////////
    //////////////////////////////////////////////

                /// this is magic c ///
        const c = new pc.Entity();
        c.name = "cam"
        app.systems.camera.addComponent(c, {});
        app.root.addChild(c);
        c.translateLocal(0,0,3);    
    
    app.mouse.on(pc.EVENT_MOUSEDOWN, mouseRaycast);
    var picker = new pc.scene.Picker(app.graphicsDevice, 1024,1024);

            function mouseRaycast(e) {
            var x = e.x * picker.width / canvas.clientWidth;
            var y = picker.height - (e.y * picker.height / canvas.clientHeight);
  
            picker.prepare(c.camera.camera, app.context.scene);
            var selection = picker.getSelection({
                x: x,
                y: y
            });
  
                if (selection.length) {
                    var mesh = selection[0];
                    var node = mesh.node;
                    while (node && !(node instanceof pc.Entity)) {
                    node = node.getParent();
                    }
                    
                    alert("clicked: " + node.name);
                };

                /* doRaycast(e.x, e.y);
            };

            function doRaycast(screenX, screenY) {
            // The pc.Vec3 to raycast from (the position of the camera)
            var from = camera.getPosition();

            // The pc.Vec3 to raycast to (the click position projected onto the camera's far clip plane)
            var to = camera.camera.screenToWorld(screenX, screenY, camera.camera.farClip);

            // Raycast between the two points and return the closest hit result
            var result = app.systems.rigidbody.raycastFirst(from, to);

            // If there was a hit, store the entity
            if (result) {
                var hitEntity = result.camera;
                console.log('You selected ' + hitEntity.name);
            }     */
            };
       
    
    

    // rotate the box according to the delta time since the last frame
    app.on("update", (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt));
    //////////////////////////////////////////////////////////////////

    
});

</script>
<body>
<div  class="bg-green-200 text-center m-2">Пока идет тест... дебажим по оси x: {testx}<br />
    и по оси y: {testy}  а также узнаем имя {box.name}<!-- {a} and {b} --> </div>
<canvas bind:this={canvas}
        width={600}
        height={350}
>


</canvas>
<div id="parentdiv1">
    <div id="debug"></div>
</div>

<div>Footer</div>
</body>