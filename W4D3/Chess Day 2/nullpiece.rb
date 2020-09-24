class Nullpiece < Piece
    include Singleton

    def initialize
        @symbol = "_"
        @color = #??
    end

    def moves
        #??
    end
    
    def symbol
        @symbol
    end
end 