class Node
  attr_accessor :left, :right, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

end

def calc_tree_height(root)
  return 1 if has_no_children(root)

  if(root.left)
    left_depth = calc_tree_height(root.left)
  else
    left_depth = 0
  end

  if(root.right)
    right_depth = calc_tree_height(root.right)
  else
    right_depth = 0
  end

  if(left_depth >= right_depth)
    big_depth = left_depth
  else
    big_depth = right_depth
  end

  return big_depth + 1
end

def has_no_children(node)
  return false if node.left || node.right

  true
end

a = Node.new(1)
b = Node.new(2)
c = Node.new(3)
d = Node.new(1)
e = Node.new(1)
f = Node.new(1)
g = Node.new(1)


a.left = b
b.right = c
a.right = d
d.left = e
d.right = f
e.left = g

p calc_tree_height(a)
