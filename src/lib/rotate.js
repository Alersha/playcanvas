// Create a rotation script
var Rotate = pc.createScript('rotate');
Rotate.prototype.update = function (dt) {
    this.entity.rotate(10 * dt, 20 * dt, 30 * dt);
};