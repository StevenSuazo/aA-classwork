const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js")
const Game = require("./game.js")
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.GameView = GameView;
window.Game = Game;


document.addEventListener('DOMContentLoaded', function(){
    const canvas1 = document.getElementById('game-canvas');
    const ctx = canvas1.getContext('2d');

    const game = new Game();
    const gameView = new GameView(game, ctx);
    gameView.start();

});