<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';


    onMount(() => {

            // THIS SHOWS HOW TO LABEL A 3D MODEL WITH HTML WITH PLAYCANVAS!!!
// https://github.com/playcanvas/engine

// Let's build a data structure to define the hierarchy for an articulated character
var man = { 
  name: 'Body',
  type: 'capsule', 
  pos: [ 0, 0, 0 ],
  rot: [ 0, 0, 0 ],
  scl: [ 1, 1, 1 ],
  children: [
    { 
      name: 'Head',
      type: 'sphere',
      pos: [ 0, 1.5, 0 ],
      rot: [ 0, 0, 0 ],
      scl: [ 1, 1, 1 ],
      children: []
    },
    { 
      name: 'Right Upper Arm',
      type: 'capsule',
      pos: [ 0.65, 0.5, 0 ],
      rot: [ 20, 0, 20 ],
      scl: [ 0.5, 0.5, 0.5 ],
      children: [
        { 
          name: 'Right Lower Arm',
          type: 'capsule',
          pos: [ 0, -1.8, 0.5 ],
          rot: [ -50, 0, 0 ],
          scl: [ 1, 1, 1 ],
          children: []
        },
      ]
    },
    { 
      name: 'Left Upper Arm',
      type: 'capsule',
      pos: [ -0.65, 0.5, 0 ],
      rot: [ 20, 0, -20 ],
      scl: [ 0.5, 0.5, 0.5 ],
      children: [
        { 
          name: 'Left Lower Arm',
          type: 'capsule',
          pos: [ 0, -1.8, 0.5 ],
          rot: [ -50, 0, 0 ],
          scl: [ 1, 1, 1 ],
          children: []
        },
      ]
    },
    { 
      name: 'Right Upper Leg',
      type: 'capsule',
      pos: [ 0.5, -1.2, 0 ],
      rot: [ -10, 0, 10 ],
      scl: [ 0.5, 0.5, 0.5 ],
      children: [
        { 
          name: 'Right Lower Leg',
          type: 'capsule',
          pos: [ 0, -1.8, -0.5 ],
          rot: [ 20, 0, 0 ],
          scl: [ 1, 1, 1 ],
          children: []
        },
      ]
    },
    { 
      name: 'Left Upper Leg',
      type: 'capsule',
      pos: [ -0.5, -1.2, 0 ],
      rot: [ -10, 0, -10 ],
      scl: [ 0.5, 0.5, 0.5 ],
      children: [
        {
          name: 'Left Lower Leg',
          type: 'capsule',
          pos: [ 0, -1.8, -0.5 ],
          rot: [ 20, 0, 0 ],
          scl: [ 1, 1, 1 ],
          children: []
        },
      ]
    }
  ]
};

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
  light.light.shadowBias = 0.1;
  light.light.normalOffsetBias = 0.01;
  light.setPosition(x, y, z);
  return light;
}

function createShape(node) {
  var shape = new pc.Entity();
  shape.setName(node.name);
  shape.setLocalPosition(node.pos[0], node.pos[1], node.pos[2]);
  shape.setLocalEulerAngles(node.rot[0], node.rot[1], node.rot[2]);
  shape.setLocalScale(node.scl[0], node.scl[1], node.scl[2]);

  shape.addComponent('model', { type: node.type });
  shape.model.castShadows = true;
  
  var material = shape.model.material;
  material.diffuse.set(1, 1, 1);
  material.specular.set(0.25, 0.25, 0.25);
  material.shininess = 40;
  material.update();
  return shape;
}

function createLabel(entity) {
  var div = document.createElement('div');
  div.innerHTML = entity.getName();
  div.style.fontFamily = 'Verdana, sans-serif';
  div.style.color = '#fff';
  div.style.position = 'absolute';
  document.body.appendChild(div);
  
  return {
    entity: entity,
    div: div
  };
}

var labels = [];
(function buildModel(node, parent) {
  var shape = createShape(node);
  parent.addChild(shape);

  labels.push(createLabel(shape));

  for (var i = 0; i < node.children.length; i++) {
    buildModel(node.children[i], shape);
  }
})(man, app.root);

var screenCoord = new pc.Vec3();

var camera = createCamera(0, -0.35, 6);
var redLight = createLight('point', 1, 0.4, 0.4, 0, 0, 2);
var blueLight = createLight('point', 0.4, 0.4, 1, 0, 0, 2);
var ground = createShape({
  name: 'Ground',
  type: 'plane',
  pos: [ 0, -2.6, 0 ],
  rot: [ 0, 0, 0 ],
  scl: [ 100, 100, 100 ],
  children: []
});
app.root.addChild(ground);

// Register an update event to rotate the shapes
app.on("update", function (dt) {
  app.root.findByName('Body').rotate(0, 10 * dt, 0);  
  
  // Update all label positions
  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    camera.camera.worldToScreen(label.entity.getPosition(), screenCoord);

    label.div.style.top = Math.round(screenCoord.y) + 'px';
    label.div.style.left = Math.round(screenCoord.x) + 'px';
    var opacity = pc.math.clamp(screenCoord.z, 6, 6.25) - 6;
    label.div.style.opacity = (1 - opacity * 4) + "";
  }

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