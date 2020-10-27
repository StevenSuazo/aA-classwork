const Asteroid = require("./asteroid");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 8;


Game.prototype.addAsteroids = function addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({
          game: this

        }));
    }
    
}

Game.prototype.randomPosition = function () {
    const x = Math.random() * Game.DIM_X;
    const y = Math.random() * Game.DIM_Y;
    return [x, y];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  clear = this.asteroids;
  for (let i = 0; i < clear.length; i++) {
    clear[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
    move = this.asteroids
    for (let i = 0; i < move.length; i++) {
        move[i].move();
    }
}

module.export = Game;