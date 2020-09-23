require_relative "piece.rb"
class Board
    attr_reader :board
    def initialize
        @rows = Array.new(8) {Array.new(8)}
        self.fill_board
    end

    def [](pos)
        row, col = pos
        @rows[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @rows[row][col] = val
    end

    def fill_board
        white_row = [0, 1]
        black_row = [6, 7]
        (0...@rows.length).each do |row_i|
            (0...@rows.length).each do |col_i|
                pos = [row_i, col_i]
                if white_row.include?(row_i)
                    self[pos] = Piece.new
                elsif black_row.include?(row_i)
                    self[pos] = Piece.new
                else
                    self[pos] = nil
                end
            end
        end      
    end

    def move_piece(start_pos, end_pos)
        if self[start_pos] == nil || !valid_pos?(start_pos)
            raise "There is no piece here!"
        elsif !valid_pos?(end_pos)
            raise "Piece cannot move to this position!"
        end

        if valid_pos?(start_pos) && valid_pos?(end_pos)
            temp = self[start_pos]
            self[end_pos] = temp
            self[start_pos] = nil
            temp = self[end_pos] 
        end
    end

    def valid_pos?(pos)
        return false unless pos.first.between?(0, 7) && pos.last.between?(0, 7)
        true 
    end

    def add_piece(piece, pos)
    end
    
    def checkmate?(color)
    end
    
    def in_check?(color)
    end
    
    def find_king(color)
    end

    def pieces
    end

    def dup
    end
    
    def move_piece!(color, start_pos, end_pos)
    end
end