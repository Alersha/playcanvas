<script>
    import { onMount } from 'svelte';

    let canvas;
    let triangle;
    let parallelogram;
    /* let shape; */
    
    onMount(() => {
        
var ctx = canvas.getContext("2d");

/* var canvasOffset = canvas.offsetTop; */
var offsetX = canvas.offsetLeft;
var offsetY = canvas.offsetTop;
/* var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top; */
/* var scrollX = canvas.scrollLeft;
var scrollY = canvas.scrollTop; */

// set styles
ctx.fillStyle = "skyblue";
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 2;

// create a triangle and parallelogram object

triangle = {
    points: [{
        x: 25,
        y: 100
    }, {
        x: 50,
        y: 50
    }, {
        x: 75,
        y: 100
    }],
    message: "I am a triangle"
}

parallelogram = {
    points: [{
        x: 150,
        y: 50
    }, {
        x: 250,
        y: 50
    }, {
        x: 200,
        y: 100
    }, {
        x: 100,
        y: 100
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

function handleMouseDown(e) {
    e.preventDefault();

    // get the mouse position
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    // iterate each shape in the shapes array
    for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        // define the current shape
        define(shape);
        // test if the mouse is in the current shape
        if (ctx.isPointInPath(mouseX, mouseY)) {
            // if inside, display the shape's message
            console.log(shape.message);
            info.innerHTML = shape.message;
        }
    }

}

// listen for mousedown events
canvas.addEventListener("click", function (e) {
    handleMouseDown(e);
    
});
    })
</script>


<h4>Click on a shape.</h4>
<canvas bind:this={canvas}

width={300} height={300}></canvas>

<div id="info"></div>