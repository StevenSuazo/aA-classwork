# Phase I
# First, write a function that compares each element to every other 
# element of the list. Return the element if all other elements in 
# the array are larger.
# What is the time complexity for this function?

# my_min
# Given a list of integers find the smallest number in the list.

def my_min(array)
    array.each do |ele1|
        return ele1 if array.all? {|ele2| ele1 <= ele2}
    end
end

# Example:
list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5
# Runtime Complexity: O(n)

# Phase II
# Now rewrite the function to iterate through the list just once while keeping 
# track of the minimum. What is the time complexity?

def my_min2(array)
    min = array.first
    array.each {|ele| min = ele if ele < min}
    min
end


# Example:
list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min2(list)  # =>  -5
# Runtime Complexity: O(n)

#__________________________________________________________________________#

# Largest Contiguous Sub-sum
# You have an array of integers and you want to find the largest contiguous 
# (together in sequence) sub-sum. Find the sums of all contiguous sub-arrays and 
# return the max.

# Phase I
# Write a function that iterates through the array and finds all sub-arrays using 
# nested loops. First make an array to hold all sub-arrays. Then find the sums of 
# each sub-array and return the max.
# Discuss the time complexity of this solution.

def largest_contiguous_subsum(list)
    subs = []

    (0...list.length).each do |idx1|
        (0...list.length).each do |idx2|
            subs << list[idx1..idx2] if idx2 >= idx1
        end
    end
    subs.map(&:sum).max
end

# Example:
list1 = [5, 3, -7]
p largest_contiguous_subsum(list1) # => 8

# possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7

# Example 2:
list2 = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list2) # => 8 (from [7, -6, 7])

# Example 3
list3 = [-5, -1, -3]
# [-5], [-5, -1], [-5, -1, -3], 
p largest_contiguous_subsum(list3) # => -1 (from [-1])
# Runtime Complexity: 0(2n^2)

# Phase II
# Let's make a better version. Write a new function using O(n) 
# time with O(1) memory. Keep a running tally of the largest sum. 
# To accomplish this efficient space complexity, consider using two variables. 
# One variable should track the largest sum so far and another to track the 
# current sum. We'll leave the rest to you.

def largest_contiguous_subsum_2(list)
    current_sum = list.first
    largest_sum = list.first

    list.drop(1).each do |ele| 
        largest_sum = ele if largest_sum < ele
        current_sum += ele
        largest_sum = current_sum if largest_sum < current_sum
        current_sum = 0 if current_sum < 0
    end
    largest_sum
    
end

# Example:
list1 = [5, 3, -7]
p largest_contiguous_subsum_2(list1) # => 8

# Example 2:
list2 = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum_2(list2) # => 8 (from [7, -6, 7])

# Example 3
list3 = [-5, -1, -3]
# [-5], [-5, -1], [-5, -1, -3], 
p largest_contiguous_subsum_2(list3) # => -1 (from [-1])
# Runtime Complexity: O(n)