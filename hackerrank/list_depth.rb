# might need to change node/linkedList classes, seems like they're set up
# incorrectly

class Node
  attr_accessor :value, :children, :next

  def initialize(value)
    @value = value
    @next = nil
    @children = []
  end
end

class LinkedList
  attr_accessor :head, :last

  def initialize()
    @head = nil
    @last = nil
  end

  def append(node)
    if(@head.nil?)
      @head = node
      @last = node
    else
      @last.next = node
      @last = node
    end
  end
end

def list_depth(nodes)
  linked_arr = []
  children = []
  curr_list = LinkedList.new()

  nodes.each do |node|
    curr_list.append(node)
    children += node.children
  end

  linked_arr.push(curr_list)

  return linked_arr + list_depth(children)

end
