class Node
  attr_accessor :value, :is_complete, :children

  def initialize(value)
    @value = value
    @is_complete = false
    @children = []
  end

end

a = Node.new("a")
s = Node.new("s")
s2 = Node.new("s")

a.children << s
s.is_complete = true
s.children << s2
s2.is_complete = true
