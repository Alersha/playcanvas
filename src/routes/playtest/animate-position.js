// More information about curves can be found at: 
// http://developer.playcanvas.com/en/user-manual/scripting/script-attributes/
// http://developer.playcanvas.com/en/api/pc.Curve.html

var AnimatePosition = pc.createScript('animatePosition');
var Rotate = pc.createScript("rotate");

Rotate.prototype.update = function (dt) {
    this.entity.rotate(0, 0*dt, 0);
};

// Example of creating curve attribute with multiple curves (in this case, x, y, z)
AnimatePosition.attributes.add("offsetCurve", {type: "curve", title: "Offset Curve", curves: [ 'x', 'y', 'z' ]});
AnimatePosition.attributes.add("duration", {type: "number", default: 22, title: "Duration (secs)"});


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
    var curveValue = this.offsetCurve.value(percent);
    
    // Create our new position from the startPosition and curveValue
    this.position.copy(this.startPosition);
    this.position.x += curveValue[0];
    this.position.y += curveValue[1];
    this.position.z += curveValue[2];
    
    this.entity.setPosition(this.position);
};