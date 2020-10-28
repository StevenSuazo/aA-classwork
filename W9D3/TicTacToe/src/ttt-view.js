class View {
  constructor(game, $grid) {
    debugger;
    this.game = game;
    this.$grid = $grid;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    debugger;
    $(this.gird).on('click', 'li', function (event) {
      debugger;
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const currentPlayer = this.game.currentPlayer;
    const pos = $square.data('pos');

    try {
      this.game.playMove(pos);
    } catch (error) {
      alert(error.msg);
    }
    // add a class ('x' or 'o') to $square
    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      const winner = this.game.winner();

      if (winner) {
        $(currentPlayer).addClass('winner');
        $('<figcaption>').html(`Congrats ${winner}, you WIN! 🎊🎉`).appendTo($('<figure>'));
      } else {
        $('<figcaption>').html("It's a draw.").appendTo($('<figure>'));
      }

    }
  }

  setupBoard() {
    let $ul = $('<ul>');
    debugger;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $newLi = $('<li>').data("pos", [i, j]);
        $ul.append($newLi);
        debugger;
      }
      this.$grid.append($ul);
      debugger;
    }
  }
  

}
module.exports = View;
