def my_uniq(array)
    raise ArgumentError if array.is_a?(String)

    hash = Hash.new(0)
    array.each{|ele| hash[ele] += 1}
    hash.keys
end

def two_sum(array)
    raise ArgumentError unless array.is_a?(Array)
    result = []

    array.each_with_index do |ele1, idx1|
        array.each_with_index do |ele2, idx2|
            result << [idx1,idx2] if (ele1 + ele2 == 0) && (idx2 > idx1) 
        end
    end
    result
end

def my_transpose(matrix)
    hight = matrix.length
    width = matrix.first.length
    result = Array.new(hight) {Array.new(width)}

    (0...hight).each do |row|
        (0...width).each do |col|
            result[row][col] = matrix[col][row]
        end
    end
    result
end

def stock_picker(array)
    profit_pay = []
    max = 0
    raise ArgumentError unless array.is_a?(Array)

    array.each_with_index do |stock1, idx1|
        array.each_with_index do |stock2, idx2|
            if idx2 > idx1
                if stock2 - stock1 > max 
                    max = stock2 - stock1
                    profit_pay = [idx1, idx2]
                end
            end
        end
    end
    profit_pay
end
