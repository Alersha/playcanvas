<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() =>{

        

const canvas = document.getElementById("application-canvas");
const app = new pc.Application(canvas);
app.start();

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

const camera = new pc.Entity();
camera.addComponent("camera", {
    clearColor: new pc.Color(0.4, 0.45, 0.5)
});
camera.translate(0, 2, 10);
app.root.addChild(camera);

const light = new pc.Entity();
light.addComponent("light", {
    type: "point",
    color: new pc.Color(1, 1, 1),
    range: 100
});
light.translate(5, 5, 10);
app.root.addChild(light);

const cube = new pc.Entity();
cube.addComponent("model", {
    type: "box"
});
cube.setLocalScale(2, 2, 1);
app.root.addChild(cube);

const mouse = new pc.Mouse(canvas);
mouse.disableContextMenu();
mouse.on('mousemove', event => {
  const pos = new pc.Vec3();
  camera.camera.screenToWorld(event.x, event.y, 10, pos);
  cube.setPosition(pos);
});

mouse.on('mousedown', event => {
    const cubeMeterial = cube.model.model.meshInstances[0].material;
    if (event.button === pc.MOUSEBUTTON_LEFT) cubeMeterial.diffuse = new pc.Color(247/255, 12/255, 12/255);
    if (event.button === pc.MOUSEBUTTON_MIDDLE) cubeMeterial.diffuse = new pc.Color(7/255, 152/255, 73/255);
    if (event.button === pc.MOUSEBUTTON_RIGHT) cubeMeterial.diffuse = new pc.Color(60/255, 82/255, 207/255);
    cubeMeterial.update();
});

window.addEventListener("resize", () => {
  app.setCanvasResolution(pc.RESOLUTION_AUTO, window.screen.width, window.screen.height);
  app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
});

    });
</script>

<canvas id="application-canvas"></canvas>