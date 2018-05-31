# NEED TO GET BACK TO THIS, HAD TO CHECK SOLN

class Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

end

# maybe recursive here
def bst_sequence(node)
  return [] if node.nil?
  return [node.value] if no_children?(node)

  original = [node.value]

  left_tree = bst_sequence(node.left)
  right_tree = bst_sequence(node.right)

  [(original + left_tree + right_tree), (original + right_tree + left_tree)]

end


# helper methods
def no_children?(node)
  return node.left.nil? && node.right.nil?
end

a = Node.new(3)
b = Node.new(1)
c = Node.new(5)

b.right = Node.new(2)

a.left = b
a.right = c


p bst_sequence(a)
