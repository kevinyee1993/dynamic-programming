class MinHeap
  attr_accessor :heap

  def initialize()
    @heap = []
  end

  #after inserting the element need to heapify it up
  def insert(element)
    @heap << element
    heapify_up
    p @heap
  end

  def extract
    #return this later to get the value
    extract_value = @heap[0]

    #switches root node with last element inserted and then pops off the
    #last element (which was the root)
    swap(0, @heap.length - 1)
    @heap.pop

    heapify_down

    extract_value

  end

  def peek
    @heap[0]
  end

  private
  def swap(idx1, idx2)
    temp = @heap[idx1]
    @heap[idx1] = @heap[idx2]
    @heap[idx2] = temp
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

  def heapify_up
    curr_idx = @heap.length - 1

    #need to check for if curr_idx > 0 because otherwise you would be comparing
    #the element at idx 0 with the last element at idx -1 which makes one
    #more unnecessary swap
    while(@heap[parent(curr_idx)] > @heap[curr_idx] && curr_idx > 0)
      swap(parent(curr_idx), curr_idx)
      curr_idx = parent(curr_idx)
    end
  end

  def heapify_down
    curr_idx = 0
    swapped = false

    until swapped
      #determine which element is smaller - left or right child
      smol_idx = smaller_child(left_child(curr_idx), right_child(curr_idx))

      #switch with the smaller child if current element is bigger than it
      if @heap[curr_idx] > @heap[smol_idx]
        swap(curr_idx, smol_idx)
        swapped = true;
      end
    end

  end

  def smaller_child(idx1, idx2)
    return idx1 if @heap[idx1] <= @heap[idx2]

    idx2
  end

end

test = MinHeap.new()

test.insert(4)
test.insert(50)
test.insert(7)
test.insert(55)
test.insert(90)
test.insert(87)
test.insert(2)


# p test.extract
# p test.heap
