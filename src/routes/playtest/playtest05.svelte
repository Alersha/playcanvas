<script>
    import * as pc from 'playcanvas';
    import { onMount } from 'svelte';

    onMount(() =>{

        // Create a PlayCanvas application
            var canvas = document.getElementById("application-canvas");
            var app = new pc.Application(canvas, {});
            app.start();

        // fill the available space at full resolution
            app.setCanvasFillMode(pc.FILLMODE_NONE, 700, 500);
            app.setCanvasResolution(pc.RESOLUTION_AUTO);


        // Create camera entity
            var camera = new pc.Entity();
            camera.addComponent('camera', {
                clearColor: new pc.Color(0.1, 0.2, 0.3)
            });




        // Create box entity
            var cube = new pc.Entity();
            cube.addComponent('model', {
                type: "box"
            });

            cube.setLocalScale(0.1, 0.1, 0.1);

        // Create directional light entity
            var light = new pc.Entity();
            light.addComponent('light');


        // Add to hierarchy
            
            app.root.addChild(camera);
            app.root.addChild(light);
            app.root.addChild(cube);


        // Set up initial positions and orientations
            camera.setPosition(0, 0, 3);
            light.setEulerAngles(45, 0, 0);


        // Create a rotation script
            var Rotate = pc.createScript('rotate');
            Rotate.prototype.update = function (dt) {
                this.entity.rotate(10 * dt, 20 * dt, 30 * dt);
            };

        // Add rotation script to cube
            /* cube.addComponent('script');
            cube.script.create('rotate'); */




            // Animate Position !!!!


                var AnimatePosition = pc.createScript('animatePosition');

                // Example of creating curve attribute with multiple curves (in this case, x, y, z)
                    AnimatePosition.attributes.add("offsetCurve", {type: "curve", title: "Offset Curve", curves: [ 'x', 'y', 'z' ]});
                    AnimatePosition.attributes.add("duration", {type: "number", default: 7, title: "Duration (secs)"});

                // initialize code called once per entity
                    AnimatePosition.prototype.initialize = function() {
                        // Store the original position of the entity so we can offset from it
                        this.startPosition = this.entity.getPosition().clone();
                        
                        // Keep track of the current position
                        this.position = new pc.Vec3();
                        
                        this.time = 0;
                    };

                // update code called every frame
                    AnimatePosition.prototype.update = function(dt) {
                        this.time += dt;
                        
                        // Loop the animation forever
                        if (this.time > this.duration) {
                            this.time -= this.duration;
                        }
                        


                        // Calculate how far in time we are for the animation
                        var percent = this.time / this.duration;
                        
                        // Get curve values using current time relative to duration (percent)
                        // The offsetCurve has 3 curves (x, y, z) so the returned value will be a set of 
                        // 3 values
                        var curve = new pc.Curve([
                                0, 0,        // At 0 time, value of 0
                                     // At 0.33 time, value of 2
                                /* 1, -1, */   // At 0.66 time, value of 2.6
                                /* 2, -2, */         // At 1 time, value of 3
                                0.33, -1,
                                /* 4, -2, */
                                /* 5, -1, */
                                0.66, 1,
                                1, 0
                                
                            ]);
                        var curvey = new pc.Curve([
                                0, 0,                       
                                0.1, -0.1,   
                                0.2, -0.2,         
                                0.3, -0.3,
                                0.4, -0.2,
                                0.5, -0.1,
                                0.6, -0.2,
                                0.7, -0.3,
                                0.8, -0.2,
                                0,9, -0.1,
                                1, 0
                                
                            ]);
                        var curveValue = curve.value(percent);
                        var curveValuey = curvey.value(percent);
                        // Create our new position from the startPosition and curveValue
                        this.position.copy(this.startPosition);
                        this.position.x += curveValue;
                        this.position.y += curveValuey;
                        /* this.position.x += curveValue[0];
                        this.position.y += curveValue[1];
                        this.position.z += curveValue[2]; */
                        
                        this.entity.setPosition(this.position);
                    };    


                // Add AnimatePosition script to cube

                cube.addComponent('script');

                cube.script.create('rotate');

                cube.script.create('animatePosition');
            // The End of Animate postion !!!!





        // Resize the canvas when the window is resized
            window.addEventListener('resize', function () {
                app.resizeCanvas(canvas.width, canvas.height);
            });


    });
</script>

<div> to <a href="/">home</a></div>

<canvas id="application-canvas"></canvas>