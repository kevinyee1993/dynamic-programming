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
  return [node.value] if no_children?(node)

end


# helper methods
def no_children?(node)
  return node.left.nil? && node.right.nil?
end
