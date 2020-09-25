require "hanoi"
require "rspec"

describe Hanoi do
    subject(:hanoi) {Hanoi.new}
    #prompt
    # ask user for what pile to select a disc from, and where to put it
    describe "#prompt" do 
        
        it "display stacks" do 
            expect(hanoi.prompt).to eq("stack1, stack2, stack3")
        end

        # it "should call valid_move?" do 
        # end
    end

    describe "#valid_move?" do
        it "should not allow move from empty stack" do
            expect{ hanoi.valid_move?(1,2)}.to raise_error("Stack is empty")
        end

        it "should not allow move on smaller disk" do
            expect{ hanoi.valid_move?(0,1)}.to raise_error("cannot move on smaller disk") 
        end

        it "should allow move to empty stack" do 
            expect(hanoi.valid_move?(0,1)).to_not raise_error
        end

        it "should allow move on lager disk" do 
            hanoi.move(0,2)
            hanoi.move(0,1)
            expect(hanoi.valid_move?(2,1)).to_not raise_error
        end
    end



end

#move
  # move the disk from one stack to another
#won?
  # if the first and second stacks are empty and the third stack is full with disks in order


