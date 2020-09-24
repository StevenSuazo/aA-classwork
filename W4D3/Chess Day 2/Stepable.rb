module Stepable
    def moves
        moves = []
        move_diffs.each do |dx, dy|
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

  private

  def move_diffs
    raise NotImplementedError
  end

end