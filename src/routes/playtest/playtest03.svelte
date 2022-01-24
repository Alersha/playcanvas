<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() => {

        // THIS SHOWS ALL THE GEOMETRIC SHAPES YOU CAN CREATE OUT OF THE BOX WITH PLAYCANVAS!!!
// https://github.com/playcanvas/engine
var canvas = document.getElementById("application-canvas");
var app = new pc.Application(canvas, {});
app.start();
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

function createCamera(x, y, z) {
  var camera = new pc.Entity();
  camera.addComponent('camera', {
    clearColor: new pc.Color(0, 0.1, 0)
  });
  app.root.addChild(camera);
  camera.setPosition(x, y, z);
  return camera;
}

function createLight(type, r, g, b, x, y, z) {
  var light = new pc.Entity();
  light.addComponent('light', { type: type });
  app.root.addChild(light);
  light.light.color = new pc.Color(r, g, b);
  light.light.castShadows = true;
  light.light.shadowBias = 0.01;
  light.light.normalOffsetBias = 0.01;
  light.setPosition(x, y, z);
  return light;
}

function createShape(type, x, y, z) {
  var shape = new pc.Entity();
  shape.addComponent('model', { type: type });
  app.root.addChild(shape);
  shape.model.castShadows = true;
  var material = shape.model.model.meshInstances[0].material;
  material.diffuse.set(1, 1, 1);
  material.specular.set(0.4, 0.4, 0.4);
  material.shininess = 70;
  material.update();
  shape.setPosition(x, y, z);
  return shape;
}

var camera = createCamera(0, 0, 6);
var redLight = createLight('point', 1, 0, 0, 0, 0, 2);
var blueLight = createLight('point', 0, 0, 1, 0, 0, 2);
var shapes = [
  createShape('sphere', -1.5, 1, 0),
  createShape('cylinder', 0, 1, 0),
  createShape('capsule', 1.5, 1, 0),
  createShape('plane', -1.5, -1, 0),
  createShape('box', 0, -1, 0),
  createShape('cone', 1.5, -1, 0)
];

// Register an update event to rotate the shapes
app.on("update", function (dt) {
  for (var i = 0; i < shapes.length; i++)
    shapes[i].rotate(dt * 10, dt * 20, dt * 30);
  var t = new Date().getTime() / 1000;
  redLight.setPosition(Math.sin(t) * 3, 0, Math.cos(t) * 3);
  blueLight.setPosition(Math.sin(t + Math.PI) * 3, 0, Math.cos(t + Math.PI) * 3);
});

window.addEventListener('resize', function () {
  app.resizeCanvas(canvas.width, canvas.height);
});

    })
</script>




<canvas id="application-canvas"></canvas>