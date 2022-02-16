<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';
    /* import  '$lib/rotate.js'; */

    onMount(() =>{

        // Create a PlayCanvas application
var canvas = document.getElementById("application-canvas");
var app = new pc.Application(canvas, {});
app.start();

// Fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// Create box entity
var cube = new pc.Entity();
cube.addComponent('model', {
    type: "box"
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

// Create a rotation script
var Rotate = pc.createScript('rotate');
Rotate.prototype.update = function (dt) {
    this.entity.rotate(10 * dt, 20 * dt, 30 * dt);
};

// Add rotation script to cube
cube.addComponent('script');
cube.script.create('rotate');

// Resize the canvas when the window is resized
window.addEventListener('resize', function () {
    app.resizeCanvas(canvas.width, canvas.height);
});

    });
</script>

<canvas id="application-canvas"></canvas>