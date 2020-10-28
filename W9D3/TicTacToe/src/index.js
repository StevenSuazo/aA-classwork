const View = require('./ttt-view.js');
const Game = require('./game.js');

$(() => {
  const game = new Game();
  debugger;
  const $grid = $('figure');
  new View(game, $grid);
  debugger;
});
