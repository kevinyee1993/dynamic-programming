class Node

  attr_accessor :left, :right, :parent, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
    @parent = nil
  end

  def append_left(node)
    @left = node
    node.parent = self
  end

  def append_right(node)
    @right = node
    node.parent = self

  end

end

a = Node.new(1)
b = Node.new(2)
c = Node.new(3)
d = Node.new(4)
e = Node.new(5)

a.append_right(b)
a.append_left(c)
b.append_right(d)
b.append_left(e)

# Solution 1 where nodes have links to parents
# time complexity: O(n) because worst case will have you looking at each node at least once
# space complexity: O(1) because only creating constant variables regardless of input
def common_ancestor(node1, node2)
  depth1 = find_depth(node1)
  depth2 = find_depth(node2)

  if(depth1 >= depth2)
    long_depth = depth1
    short_depth = depth2
    long_node = node1
    short_node = node2
  else
    long_depth = depth2
    short_depth = depth1
    long_node = node2
    short_node = node1
  end

  until(long_depth == short_depth)
    long_node = long_node.parent
    long_depth -= 1
  end

  return simul_parents(short_node, long_node)

end


def simul_parents(node1, node2)

  until(node1 == node2)
    node1 = node1.parent
    node2 = node2.parent
  end

  return node1.value
end

def find_depth(node)
  count = 1

  until(node.parent.nil?)
    node = node.parent
    count += 1
  end

  return count
end

p common_ancestor(d, e)
# p find_depth(a)
# p find_depth(b)
# p find_depth(c)
