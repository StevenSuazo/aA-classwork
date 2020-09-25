class Hanoi

    def initialize
        @stacks = [[3,2,1],[],[]]
    end

    def prompt
        until won?
            puts "What stack would you like to move from?"
            user_input = gets.to_i
            if valid_move?(user_input)
                move(stack_x, stack_y)
            else
                puts "Invalid move, try again"
            end
        end
    end

    def valid_move?(stack_from, stack_to)
        raise "Stack is empty" if @stacks[stack_from].empty?
        raise "cannot move on smaller disk" if @stacks[stack_from] < @stacks[stack_to]

    end
end