function MovingObject (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI
  );
  ctx.fill();


}


MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0]; 
    this.pos[1] += this.vel[1]; 
}


  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2*Math.PI);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();

module.exports = MovingObject;

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });



// const canvas1 = document.getElementById('game-canvas');

// canvas1.width = 500;
// canvas1.height = 500;

// const ctx = canvas1.getContext('2d');

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

// mo.draw(ctx);