class Node
  attr_accessor :left, :right, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

end

node1 = Node.new(1)
node2 = Node.new(2)
node3 = Node.new(3)
node4 = Node.new(4) #this is head node
node5 = Node.new(5)
node6 = Node.new(6)
node7 = Node.new(7)

node4.left = node2
node4.right = node6

node2.left = node1
node2.right = node3

node6.left = node5
node6.right = node7

def in_order_traversal(head)

  if(head.left)
    in_order_traversal(head.left)
  end

  p head.value

  if(head.right)
    in_order_traversal(head.right)
  end

end

in_order_traversal(node4)
