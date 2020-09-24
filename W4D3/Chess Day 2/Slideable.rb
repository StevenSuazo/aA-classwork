module Slideable 

HORIZONTAL_DIRS = [
    [-1, 0], # left
    [1, 0], # right
    [0, -1], # up (vertical)
    [0, 1]  # down (vertical)
  ].freeze

DIAGONAL_DIRS = [
    [1, 1], # up + left
    [-1, -1], # up + right
    [1, -1], # down + left
    [-1, 1]  # down + right
  ].freeze


    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def moves
        moves = []
        move_dirs.each do |dx, dy|
           moves.concat(grow_unblocked_moves_in_dir(dx, dy))
        end
        moves
    end

    private
    def move_dirs
        raise NoImplementedError
    end

    def grow_unblocked_moves_in_dir(dx,dy)
        moves = []
        x, y = self.pos
        new_pos = [x + dx, y + dy]

        until Board.valid_pos?(new_pos)
            if board.empty? 
                moves << new_pos
            elsif board[new_pos].color != self.color
                moves << new_pos
                break
            end 
        end

        moves
    end
end