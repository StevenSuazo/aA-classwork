//prototypal

Function.prototype.inherits = function(SuperClass) {
    // function Surrogate() {};
    // Surrogate.prototype = SuperClass.prototype;
    // this.prototype = new Surrogate();
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
}

function MovingObject() { };
MovingObject.prototype.moving = function (destination) {
    console.log(`${this.type} is going to ${destination}`)
};

function Ship() { }

Ship.inherits(MovingObject);
console.log(new Ship().moving());

Ship.prototype.moving = function() {
    console.log("Ship");// === MovingObject
};

function Asteroid() { }
Asteroid.prototype.moving = function () {
    console.log("Asteroid"); //=== MovingObject
};
Asteroid.inherits(MovingObject);

// console.log(Ship.__proto__) //=== MovingObject 

let m = new Ship();
let a = new Asteroid();
let c = new MovingObject();
m.moving();
// a.moving();
// c.moving();


