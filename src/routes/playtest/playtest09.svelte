<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() =>{

        // forked from PlayCanvas's "A Pen by PlayCanvas" https://codepen.io/playcanvas/pen/ctxoD

var DOT_SIZE = 0.3;
var X_START_POS = -7;
var Y_START_POS =  0;
var Z_START_POS =  0;
// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□
// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□
// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□
// ‥‥‥‥‥■■■□□■□‥■■■
// ‥‥‥‥■□■□□□■□□■■■
// ‥‥‥‥■□■■□□□■□□□■
// ‥‥‥‥■■□□□□■■■■■‥
// ‥‥‥‥‥‥□□□□□□□■‥‥
// ‥‥■■■■■〓■■■〓■‥‥‥
// ‥■■■■■■■〓■■■〓‥‥■
// □□■■■■■■〓〓〓〓〓‥‥■
// □□□‥〓〓■〓〓□〓〓□〓■■
// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■
// ‥‥■■■〓〓〓〓〓〓〓〓〓■■
// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥
// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥
var dataSet = [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BG","BG",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BR","BG","BK","RD","RD","RD",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BR","BG","BG","RD","RD","RD",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BG","RD",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","RD","BK",
    "BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BG","RD","BK","BK",
    "BK","BK","RD","RD","RD","RD","RD","BL","RD","RD","RD","BL","RD","BK","BK","BK",
    "BK","RD","RD","RD","RD","RD","RD","RD","BL","RD","RD","RD","BL","BK","BK","BR",
    "BG","BG","RD","RD","RD","RD","RD","RD","BL","BL","BL","BL","BL","BK","BK","BR",
    "BG","BG","BG","BK","BL","BL","RD","BL","BL","YL","BL","BL","YL","BL","BR","BR",
    "BK","BG","BK","BR","BL","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK","BK","BK"
];

// create a few materials for our objects
var black  = createMaterial( 0xdc/0xff, 0xaa/0xff, 0x6b/0xff );
var white  = createMaterial( 0xff/0xff, 0xff/0xff, 0xff/0xff );
var beige  = createMaterial( 0xff/0xff, 0xcc/0xff, 0xcc/0xff );
var brown  = createMaterial( 0x80/0xff, 0x00/0xff, 0x00/0xff );
var red    = createMaterial( 0xff/0xff, 0x00/0xff, 0x00/0xff );
var yellow = createMaterial( 0xff/0xff, 0xff/0xff, 0x00/0xff );
var green  = createMaterial( 0x00/0xff, 0xff/0xff, 0x00/0xff );
var ltblue = createMaterial( 0x00/0xff, 0xff/0xff, 0xff/0xff );
var blue   = createMaterial( 0x00/0xff, 0x00/0xff, 0xff/0xff );
var purple = createMaterial( 0x80/0xff, 0x00/0xff, 0x80/0xff );

function getRgbColor( c )
{
    var colorHash = {
        "BK":black,   // 0x000000,
        "WH":white,   // 0xffffff,
        "BG":beige,   // 0xffcccc,
        "BR":brown,   // 0x800000,
        "RD":red,     // 0xff0000,
        "YL":yellow,  // 0xffff00,
        "GN":green,   // 0x00ff00,
        "WT":ltblue,  // 0x00ffff,
        "BL":blue,    // 0x0000ff,
        "PR":purple   // 0x800080
    };
    return colorHash[ c ];
}


// Create a PlayCanvas application
var canvas = document.getElementById("application-canvas");
var app = new pc.fw.Application(canvas, {});
app.start();

// Fill the available space at full resolution
app.setCanvasFillMode(pc.fw.FillMode.FILL_WINDOW);
app.setCanvasResolution(pc.fw.ResolutionMode.AUTO);

app.context.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

// Utility function to create a material
function createMaterial(r, g, b) {
  var material = new pc.scene.PhongMaterial();
  material.ambient.set(r, g, b);
  material.diffuse.set(r, g, b);
  material.specular.set(1, 1, 1);
  material.shininess = 2;
  material.update();
  return material;
}

// Create camera entity
function Camera() {
  var cam = new pc.fw.Entity();
  app.context.systems.camera.addComponent(cam, {
    clearColor: new pc.Color(0.1, 0.1, 0.1),
    farClip: 20
  });
  app.context.root.addChild(cam);
  this.entity = cam;
  this.timer = 0;
}

Camera.prototype.update = function (dt) {
  this.timer += dt;
  // Spin the camera around a center point
  var x = Math.sin(this.timer * 0.25) * 6;
  var z = Math.cos(this.timer * 0.25) * 4;
  var e = this.entity;
  e.setPosition(x, 5, z);
  e.lookAt(0, 3, 0);
}

// Create spot light entity
function Light() {
  var light = new pc.fw.Entity();
  light.setPosition(10, 10, 10);
  light.setEulerAngles(45, 45, 0);
  app.context.systems.light.addComponent(light, {
    type: "spot",
    intensity: 1.2,
    castShadows: true,
    range: 60
  });
  light.light.model.lights[0].setShadowBias(-0.00003);
  app.context.root.addChild(light);
  this.entity = light;
}

// Create ground
function Ground() {
  var ground = new pc.fw.Entity();
  ground.setPosition(0, -0.5, 0);
  ground.setLocalScale(10, 1, 10);
  app.context.systems.model.addComponent(ground, {
    type: "box"
  });
  app.context.systems.rigidbody.addComponent(ground, {
    type: "static"
  });
  app.context.systems.collision.addComponent(ground, {
    type: "box",
    halfExtents: [5, 0.5, 5]
  });
  var blue = createMaterial(0.28, 0.46, 1);
  ground.model.model.meshInstances[0].material = blue;
  app.context.root.addChild(ground);
  this.entity = ground;
}

// Create wall
function Wall() {
  //var black = createMaterial(0, 0, 0);
  //var white = createMaterial(1, 1, 1);

  this.bricks = [];

  //for (var i = 0; i < 25; i++) {
  for (var i = 0; i < dataSet.length; i++) {
    var body = new pc.fw.Entity();
    app.context.systems.model.addComponent(body, {
      type: "box",
      castShadows: true
    });
    app.context.systems.rigidbody.addComponent(body, {
      type: "dynamic"
    });
    app.context.systems.collision.addComponent(body, {
      type: "box",
      halfExtents: [0.5*DOT_SIZE, 0.5*DOT_SIZE, 0.5*DOT_SIZE]
    });
    app.context.root.addChild(body);
    body.model.material = getRgbColor(dataSet[i]);
    body.setLocalScale(1*DOT_SIZE, 1*DOT_SIZE, 1*DOT_SIZE);

    this.bricks.push(body);
  }
  this.reset();
}

Wall.prototype.reset = function () {
  for (var i = 0; i < this.bricks.length; i++) {
    var e = this.bricks[i];
    var x = (X_START_POS+(i % 16)) * DOT_SIZE;
    var y = (15-Math.floor( i / 16 )) * DOT_SIZE;
    var z = 0;
    //e.setPosition(i % 5 - 2, i / 5, 0);
    e.setPosition(x, y, z);
    e.setEulerAngles(0, 0, 0);
    e.rigidbody.linearVelocity = pc.Vec3.ZERO;
    e.rigidbody.angularVelocity = pc.Vec3.ZERO;
    e.rigidbody.syncEntityToBody();
  }
};

function Ball() {
  var e = new pc.fw.Entity();
  e.setPosition(0, -10, 0);
  app.context.systems.model.addComponent(e, {
    type: "sphere",
    castShadows: true
  });
  app.context.systems.rigidbody.addComponent(e, {
    type: "dynamic"
  });
  app.context.systems.collision.addComponent(e, {
    type: "sphere",
    radius: 0.5
  });
  var red = createMaterial(1, 0.28, 0.28);
  e.model.model.meshInstances[0].material = red;
  app.context.root.addChild(e);
  this.entity = e;
}

Ball.prototype.fire = function () {
  var e = this.entity;
  //e.setPosition(0, 2, 5);
  e.setPosition(0, 1, 5);
  e.rigidbody.syncEntityToBody();
  e.rigidbody.linearVelocity = new pc.Vec3((Math.random() - 0.5) * 10, 7, -30);
  e.rigidbody.angularVelocity = pc.Vec3.ZERO;
};

// Create the scene
var camera = new Camera();
var light = new Light();
var ground = new Ground();
var wall = new Wall();
var ball = new Ball();

// Reset the wall and fire the ball every 4 seconds
var n = 0;
setInterval(function () {
  n++;
  if (n % 4 === 0)
    wall.reset();
  if (n % 4 === 1)
    ball.fire();
}, 1000);

// Register an update event to rotate the camera
app.on("update", function (dt) {
  camera.update(dt);
});


    });
</script>

<!-- <svelte:head>
    <script src="https://code.playcanvas.com/playcanvas-0.148.0.js"></script>
    <script src="https://code.playcanvas.com/ammo.3c2cc63.js"></script>
</svelte:head> -->

<canvas id="application-canvas"></canvas>