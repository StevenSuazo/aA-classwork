require_relative 'Piece.rb'
require_relative 'Stepable.rb'
class King < Piece
    include Stepable
KING_DIFFS = [
    [-1 -1],
    [-1, 1],
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ].freeze

    def symbol
       '♚'.colorize(color)
    end

    protected
    def move_diffs
        KING_DIFFS
    end
end

