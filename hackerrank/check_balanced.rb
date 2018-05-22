# time complexity:
#  best case: O(log(n))
#  worst case: O(n)

# space complexity: O(1)

class Node
  attr_accessor :left, :right, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

def is_balanced?(root)
  left = get_depth(root.left)
  right = get_depth(root.right)

  within_range(left, right)

end

def within_range(val1, val2)
  return true if(val1 == val2 || val1 == val2 + 1 || val2 == val1 + 1)
  false
end

def get_depth(root)
  return 0 if root.nil?
  return 1 if has_no_children(root)

     left_length = get_depth(root.left)

     right_length = get_depth(root.right)

   if(left_length >= right_length)
     big_length = left_length
   else
     big_length = right_length
   end

   return 1 + big_length
end

def has_no_children(root)
  return false if root.left || root.right
  return true
end

a = Node.new(1)
b = Node.new(2)
c = Node.new(2)
d = Node.new(2)
e = Node.new(2)

a.left = b
b.left = c
a.right = d


p is_balanced?(a)
