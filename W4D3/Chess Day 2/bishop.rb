require_relative 'Piece.rb'
require_relative 'Slideable.rb'
class Bishop < Piece
    include Slideable
    def symbol
        '♝'.colorize(color)
    end

    protected
    def move_dirs
        diagonal_dirs
    end
end