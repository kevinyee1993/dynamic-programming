class MinHeap
  attr_accessor :heap

  def initialize()
    @heap = []
  end

  def left_child(index)
    return index * 2 + 1
  end

  def right_child(index)
    return index * 2 + 2
  end

  def parent(index)
    return (index - 1) / 2
  end

  #after inserting the element need to heapify it up
  def insert(element)
    @heap << element
    heapify_up
  end

  def heapify_up
    curr_idx = @heap.length - 1

    while(@heap[parent(curr_idx)] > @heap[curr_idx] && curr_idx > 0)
      swap(parent(curr_idx), curr_idx)
      curr_idx = parent(curr_idx)
    end
  end

  def peek
    @heap[0]
  end

  def swap(idx1, idx2)
    temp = @heap[idx1]
    @heap[idx1] = @heap[idx2]
    @heap[idx2] = temp
  end

end

test = MinHeap.new()

test.insert(6)
test.insert(3)
test.insert(1)
test.insert(2)
test.insert(4)
p test.heap
# test.swap(0,1)
# p test.heap
