# time: O(n)
# space: O(n)

class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end


def add_two_numbers(l1, l2)
  num1 = list_to_num(l1)
  num2 = list_to_num(l2)

  sum = num1 + num2

num_to_list(sum)

end

def list_to_num(list_node)
  str = ""
  curr_node = list_node

  while(curr_node)
     # p curr_node.val
    str += curr_node.val.to_s
    curr_node = curr_node.next
    # p str
  end


  str.reverse.to_i
end

def num_to_list(num)
  arr = []

  if(num == 0)
    return [0]
  end

  while(num > 0)
    arr.push(num % 10)
    num = num / 10
  end

  head_node = ListNode.new(arr[0])
  curr_node = head_node
  for i in 1...arr.length
    curr_node.next = ListNode.new(arr[i])
    curr_node = curr_node.next
  end

  # p head_node
  arr

end
