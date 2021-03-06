#page 109

#take mid of array and set that as root
#split up the left and right array and recursively call this on them
#keep going until no more children
class Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

end

# time complexity = O(log(n)) because splitting up the array and doing operations
# space complexity = O(n) ???
# whatever the space complexity actually is, there is a way to optimize it
# by passing in indices and the original array rather than passing in
# new left and right subarrays.  The indices will just reference where
# on the original array you wanna look at but will still get the job done 
def create_minimal_tree(arr)
  return arr[0] if arr.length <= 1

  mid = arr.length / 2

  left = arr.take(mid)
  right = arr.drop(mid + 1)

  left_node = create_minimal_tree(left)
  right_node = create_minimal_tree(right)

  arr[mid].left = left_node
  arr[mid].right = right_node

  return arr[mid]
end

node1 = Node.new(1)
node2 = Node.new(2)
node3 = Node.new(3)
node4 = Node.new(9)
node5 = Node.new(31)

create_minimal_tree([node1,node2,node3,node4,node5])
# p node2.left.value
# p node3.right.value
