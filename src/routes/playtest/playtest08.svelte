<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() =>{

       // Create a PlayCanvas application
var canvas = document.getElementById("application-canvas");
var app = new pc.Application(canvas, {});

app.start();

// Fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// Set up some fancy curves to animate particle properties
var colorCurve = new pc.CurveSet([
  [0, 1, 0.5, 1, 0.75, 0.5, 1, 0],
  [0, 0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1, 1],
  [0, 0, 0.5, 1, 1, 0]
]);

var velocityCurve = new pc.CurveSet([[0, -5, 1, 0], [0, -5, 1, 0], [0, -5, 1, 0]]);
var velocityCurve2 = new pc.CurveSet([[0, 5, 1, 0], [0, 5, 1, 0], [0, 5, 1, 0]]);

var rotationSpeedCurve = new pc.Curve([0, 0, 1, 45]);
var rotationSpeedCurve2 = new pc.Curve([0, 0, 1, -45]);

var scaleCurve = new pc.Curve([0, 0.1, 1, 1]);

var alphaCurve = new pc.Curve([0, 0, 0.1, 1, 0.8, 1, 1, 0]);
var alphaCurve2 = new pc.Curve([0, 0, 0.1, 0.6, 0.8, 0.6, 1, 0]);

// Create box entity
var cube = new pc.Entity();
cube.addComponent('particlesystem', {
  numParticles: 200,
  lifetime: 1.5,
  rate: 0.01,
  colorGraph: colorCurve,
  scaleGraph: scaleCurve,
  alphaGraph: alphaCurve,
  alphaGraph2: alphaCurve2,
  velocityGraph: velocityCurve,
  velocityGraph2: velocityCurve2,
  rotationSpeedGraph: rotationSpeedCurve,
  rotationSpeedGraph2: rotationSpeedCurve2,
  spawnBounds: new pc.Vec3(0, 0, 0),
  blendType: pc.BLEND_ADDITIVE,
  startAngle: -45,
  startAngle2: 45,
  preWarm: true
});

// Create camera entity
var camera = new pc.Entity();
camera.addComponent('camera', {
  clearColor: new pc.Color(0.1, 0.2, 0.3)
});

// Create directional light entity
var light = new pc.Entity();
light.addComponent('light');

// Add to hierarchy
app.root.addChild(cube);
app.root.addChild(camera);
app.root.addChild(light);

// Set up initial positions and orientations
camera.setPosition(0, 0, 3);
light.setEulerAngles(45, 0, 0);

// Register an update event
app.on("update", function (deltaTime) {
});

window.addEventListener('resize', function () {
  app.resizeCanvas(canvas.width, canvas.height);
}); 

    });
</script>

<canvas id="application-canvas"></canvas>