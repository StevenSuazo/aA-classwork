class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    total = 0
    self.each_with_index { |ele, idx| total += ele * idx }
    total.hash
  end
end

class String
  def hash

  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    
  end
end
