<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() =>{

        let cubeRotation = {
  x: 0,
  y: 0,
  z: 0
}

let lastHitEntity = null;

const debug = document.getElementById('debug');
const debugHIT = document.getElementById('debugHit');
const canvas = document.getElementById('application');
const DEPTH = 5;
const app = new pc.Application(canvas, {
  // Add mouse to the app
  mouse: new pc.Mouse(canvas)
});
app.start();

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

window.addEventListener('resize', function() {
    app.resizeCanvas();
});

var cube = new pc.Entity('cube');
cube.addComponent('model', {
    type: 'box'
});

//Add a collision component to the cube
cube.addComponent('collision');

var camera = new pc.Entity('camera');
camera.addComponent('camera', {
    clearColor: new pc.Color(0.1, 0.1, 0.1)
});

var light = new pc.Entity('light');
light.addComponent('light');

app.root.addChild(cube);
app.root.addChild(camera);
app.root.addChild(light);

camera.setPosition(0, 0, DEPTH);
light.setEulerAngles(45, 0, 0);

// ---------------------------
// Fun starts here, notice the 
// app constructor above where
// you have to add the mouse
// ---------------------------

const onMouseMove = (e) => { 
  
  const {x: eX, y: eY} = e;
  const currentCubeRotation = cube.getLocalEulerAngles();
  const mouseToWorldPosition = camera.camera.screenToWorld(eX, eY, DEPTH);
  
  cubeRotation.y = mouseToWorldPosition.x;
  cubeRotation.x = - mouseToWorldPosition.y;
  
  const debugMtoWorldX = mouseToWorldPosition.x.toFixed(2);
  const debugMtoWorldY = mouseToWorldPosition.y.toFixed(2);
  const debugMtoWorldZ = mouseToWorldPosition.z.toFixed(2);

  debug.innerHTML = `mouseX: ${eX} mouseY: ${eY}  <br>
      mouseToWorldPosition: ${[debugMtoWorldX, debugMtoWorldY, debugMtoWorldZ]}`
  
}
const onMouseDown = (e) => {
  
  //For raycasts to work, we need a collision component on the entity, see above
  const from = camera.camera.screenToWorld(e.x, e.y, camera.camera.nearClip);
  const to = camera.camera.screenToWorld(e.x, e.y, camera.camera.farClip);
  const result = app.systems.rigidbody.raycastFirst(from, to);
  if (result) {
    lastHitEntity = result.entity;
    lastHitEntity.setLocalScale(1.5, 1.5, 1.5);
    debugHIT.innerHTML = 'Hit the cube'
  } else {
    cube.setLocalScale(1, 1, 1);
    debugHIT.innerHTML = 'Missed the cube'
  }
}

//Mouse Events: mousemove, mousedown, mouseup, mousewheel 
app.mouse.on(pc.EVENT_MOUSEMOVE, onMouseMove);
app.mouse.on(pc.EVENT_MOUSEDOWN, onMouseDown);

app.on('update', function (deltaTime) {
  cube.rotate(cubeRotation.x, cubeRotation.y, cubeRotation.z);
});

    });
</script>

<canvas id="application"></canvas>
<div id='debug'>DEBUG</div>
<div id='debugHit'>HIT?</div>

<style>
    body {
   margin: 0;
   overflow: hidden;
}

#debug {
  position:absolute;
  left:4px;
  top:4px;
  padding:5px 10px;
  background:rgba(100,100,100,0.3);
  color:white;
  font-family: 'Helvetica';
}

#debugHit {
  position:absolute;
  right:4px;
  top:4px;
  padding:5px 10px;
  background:rgba(100,100,100,0.3);
  color:white;
  font-family: 'Helvetica';
}
</style>