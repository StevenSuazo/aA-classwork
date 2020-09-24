require_relative 'Piece.rb'
require_relative 'Slideable.rb'
class Rook < Piece
    include Slideable
    def symbol
        '♟︎'.colorize(color)
    end
    
    protected
    def move_dirs
      horizontal_dirs 
    end
end