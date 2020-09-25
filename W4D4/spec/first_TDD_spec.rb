require "first_TDD"
require "rspec"

describe "#my_uniq" do
    let(:array) {[1, 2, 1, 3, 3]}

    it "should take in an array" do 
        expect{ my_uniq(array)}.to_not raise_error
        expect{ my_uniq("string")}.to raise_error(ArgumentError)
    end
    
    it "remove duplicates" do 
        expect(my_uniq(array)).to eq([1,2,3])
    end
end

describe "#two_sum" do 
    let(:array) { [-1, 0, 2, -2, 1] }
    
    it "should accept an array as argument" do
        expect{ two_sum(array)}.to_not raise_error
        expect{ two_sum(String)}.to raise_error(ArgumentError)
    end

    it "find all pairs of indeces that elements sum to zero" do 
        expect(two_sum(array)).to eq([[0, 4], [2, 3]])
    end
end

describe "#my_transpose" do 
    let(:matrix) {[[0, 1, 2], [3, 4, 5], [6, 7, 8]]}

    it "transpose matirx" do 
        expect(my_transpose(matrix)).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end
end

describe "#stock_picker" do 
    let(:array) { [15, 1, 9, 8] }

    it "should accept array as argument" do 
        expect{ stock_picker(array)}.to_not raise_error
        expect{ stock_picker(String)}.to raise_error(ArgumentError)
    end

    it "should not sell before buying" do 
        result = stock_picker(array)
        expect(result.sort).to eq(result)
    end

    it "should return most profitable pair of days" do 
        expect(stock_picker(array)).to eq([1, 2])
    end
end
