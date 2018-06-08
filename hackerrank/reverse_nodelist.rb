class Node
  attr_accessor :next;

  def initialize(value)
    @value = value;
    @next = nil;
  end

end

def reverse_linkedlist(node)
  curr_node = node
  prev_node = nil

  while(curr_node)
    next_node = curr_node.next
    curr_node.next = prev_node
    prev_node = curr_node
    curr_node = next_node
  end
end

a = Node.new(1)
b = Node.new(2)
c = Node.new(3)

a.next = b
b.next = c

reverse_linkedlist(a)
p a
p b
p c
