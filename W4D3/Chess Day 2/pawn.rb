class Pawn < Piece
    def symbol
        '♟︎'.colorize(color)
    end

    def moves
        forward_steps + side_attacks
    end

    private
    def at_start_row?
        self.pos.first == (color == :white) ? 6 : 1
    end

    def forward_dir
        color == :white ? -1 : 1
    end

    def forward_steps
        x, y = pos 
        if at_start_row?
            x + 1 || x + 2
        else
            x + 1
        end
    end

    def side_attacks
        x, y = self.pos
        side_moves = []

        side_moves << [x + 1, y + 1] if valid_pos?([x + 1, y + 1])
        side_moves << [x - 1, y + 1] if valid_pos?([x - 1, y + 1])
        

    end
end