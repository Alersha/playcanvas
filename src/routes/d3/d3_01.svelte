<script>
    import { onMount } from 'svelte';

    let canvas;
    let triangle;
    let parallelogram;
    /* let shape; */
    let mouseX;
    let mouseY;
    let eclickX;
    let eclickY;
    let offsetX;
    let offsetY;
    
    onMount(() => {
        
var ctx = canvas.getContext("2d");

/* var canvasOffset = canvas.offsetTop; */
/* offsetX = canvas.offsetLeft;
offsetY = canvas.offsetTop; */
/* var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top; */
/* var scrollX = canvas.scrollLeft;
var scrollY = canvas.scrollTop; */

// set styles
ctx.fillStyle = "skyblue";
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;

// Create circle
const circle = new Path2D();
circle.arc(400, 55, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill(circle);

// create a triangle and parallelogram object

triangle = {
    points: [{
        x: 15,
        y: 100
    }, {
        x: 70,
        y: 50
    }, {
        x: 55,
        y: 100
    }],
    message: "I am a triangle"
}

parallelogram = {
    points: [{
        x: 120,
        y: 70
    }, {
        x: 170,
        y: 30
    }, {
        x: 200,
        y: 90
    }, {
        x: 88,
        y: 70
    }],
    message: "I am a parallelogram"
}

// save the triangle and parallelogram in a shapes[] array

var shapes = [];
shapes.push(triangle);
shapes.push(parallelogram);

// function to draw (but not fill/stroke) a shape
// (needed because isPointInPath only tests the last defined path)

function define(shape) {
    var points = shape.points;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
}

// function to display a shape on the canvas (define + fill + stroke)

function draw(shape) {
    define(shape);
    ctx.fill();
    ctx.stroke();
}

// display the triangle and parallelogram
draw(triangle);
draw(parallelogram);


// called when user clicks the mouse
/* var mouseX;
var mouseY; */
function handleMouseDown(e) {
    /* e.preventDefault(); */
    
    // get the mouse position
     eclickX = e.clientX;
     eclickY = e.clientY;
     mouseX = parseInt(e.offsetX);
     mouseY = parseInt(e.offsetY);

    // iterate each shape in the shapes array
    for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        // define the current shape
        define(shape);
        // test if the mouse is in the current shape
        if (ctx.isPointInPath(mouseX, mouseY)) {
            // if inside, display the shape's message
            console.log(shape.message); 
            /* ctx.fillStyle = "blue";
            ctx.fill(shape); */ 
            
            info.innerHTML = shape.message;
        }
    }

}

// listen for mousedown events
canvas.addEventListener("click", function (e) {
    handleMouseDown(e);

    

// Listen for mouse moves
canvas.addEventListener('mousemove', function(event) {
  // Check whether point is inside circle
  if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
    ctx.fillStyle = 'green';
  }
  else {
    ctx.fillStyle = 'red';
  }

  // Draw circle
  /* ctx.clearRect(0, 0, canvas.width, canvas.height); */
  ctx.fill(circle);
});
    
});
    })
    
</script>


<h4>Click on a shape.</h4>
<canvas bind:this={canvas}

width={600} height={400}></canvas>

<div id="info"></div>
<div>X offsetLeft: {offsetX} and Y offsetTop: {offsetY}</div>
<div>X e.clickX: {eclickX}  and Y e.clickY: {eclickY}</div>