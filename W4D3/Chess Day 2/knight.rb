require_relative 'Piece.rb'
require_relative 'Stepable.rb'
class Knight < Piece
    include Stepable
KNIGHT_DIFFS = [
    [-2 -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2]
  ].freeze

    def symbol
        '♞'.colorize(color)
    end

    protected
    def move_diffs
        KNIGHT_DIFFS
    end
end