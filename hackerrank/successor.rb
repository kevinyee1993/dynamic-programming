class Node
  attr_accessor :left, :right, :value, :parent

  def initialize(value)
    @value = value
    @parent = nil
    @left = nil
    @right = nil
  end

end

a = Node.new(3)
b = Node.new(5)
c = Node.new(7)

b.left = a
b.right = c
a.right = Node.new(4)
a.left = Node.new(2)



# solution 1 - brute force solution
# time complexity: O(n) because have to touch every element in the tree
# and then need to go through the array to check for the value

# space complexity: O(n) because creating array to hold all the values

def find_root(node)
  root = node

  while(node.parent)
    root = node.parent
  end

  root
end

def in_order_traversal(root, arr)
  if(root.nil?)
    return
  end

  # if(no_children(root))
  #   p root.value
  # else
    if(root.left)
      (in_order_traversal(root.left, arr))
    end

    # p root.value
    arr << root.value

    if(root.right)
      (in_order_traversal(root.right, arr))
    end
  # end
end

def no_children(node)
  if(node.left || node.right)
    return false
  end

  true
end

# arr = []
# in_order_traversal(b, arr)
# p arr
# target_node = a
#
#
# arr.each_with_index do |el, idx|
#   if(el == target_node.value)
#     p arr[idx + 1]
#   end
# end



# solution 2 - STILL NEEDS WORK NOT COMPLETELY SOLVED YET
# space complexity: worst case O(n) because creating a new variable small_val for each
#   recursive call of smallest_value. Could have situation where tree is single line with everything on the left
# time complexity: O(n) because of worst case scenario.
def smallest_value(node)
  small_val = node

  while(node.left)
    small_val = node.left
  end

  return small_val
end

def successor(node)
  if(!node.right && node.parent)
    return successor(node.parent)
  elsif(!node.right && !node.parent)
    return node
  end

  return smallest_value(node.right)
end


p successor(b).value
