# Phase I:
# Write a method #first_anagram? that will generate and store all the 
# possible anagrams of the first string. Check if the second string is 
# one of these.

def first_anagram?(str1, str2)
    arr1 = str1.split("")
    arr2 = str2.split("")
    arr1.each{|ele| return false if !arr2.include?(ele)}
    true
end

# p first_anagram?("gizmo", "sally") # false
# p first_anagram?("elvis", "lives") # true
#  Runtime Complexity: O(n^2)

#________________________________________________________________________#
# Phase II:
# Write a method #second_anagram? that iterates over the first string. 
# For each letter in the first string, find the index of that letter in 
# the second string (hint: use Array#find_index) and delete at that index. 
# The two strings are anagrams if an index is found for every letter and 
# the second string is empty at the end of the iteration.

# Try varying the length of the input strings. What are the differences 
# between #first_anagram? and #second_anagram??

def second_anagram?(str1, str2)
    str1.each_char do |char|
       return false unless str1.include?(str2[0])
       str2.delete!(char) 
    end
    return true if str2.empty?
end

# p second_anagram?("gizmo", "sally") # false
# p second_anagram?("elvis", "lives") # true
#  Runtime Complexity: O()

#________________________________________________________________________#
# Phase III:
# Write a method #third_anagram? that solves the problem by sorting 
# both strings alphabetically. The strings are then anagrams if and only 
# if the sorted versions are the identical.

# What is the time complexity of this solution? Is it better or worse 
# than #second_anagram??

def third_anagram?(str1, str2)
    storted1 = str1.chars.sort.join
    storted2 = str2.chars.sort.join
    storted1 == storted2
end

# p third_anagram?("gizmo", "sally") # false
# p third_anagram?("elvis", "lives") # true

#________________________________________________________________________#
# Phase IV:
# Write one more method #fourth_anagram?. This time, use two Hashes to store the 
# number of times each letter appears in both words. Compare the resulting hashes.

# What is the time complexity?


def fourth_anagram?(str1, str2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)
    str1.each_char {|char| hash1[char] += 1}
    str2.each_char {|char| hash2[char] += 1}
    hash1 == hash2
end

# p fourth_anagram?("gizmo", "sally") # false
# p fourth_anagram?("elvis", "lives") # true