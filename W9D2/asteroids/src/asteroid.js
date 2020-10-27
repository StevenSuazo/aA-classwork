const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

const DEFAULTS = {
  COLOR: "#D3D3D3",
  RADIUS: 30,
}

function Asteroid(options) {
    options.color =  DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    MovingObject.call(this, options);
}

Utils.inherits(Asteroid, MovingObject);


module.exports = Asteroid;