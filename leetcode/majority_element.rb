# time: O(n) because have to go through the entire array once

# space: O(n) because creating hash which could possibly take as many
# elements as how many elements there are in worst case


def majority_element(nums)

  counter = {}

  nums.each do |el|
    unless counter[el]
      counter[el] = 1
    else
      counter[el] += 1
     end

     return el if counter[el] > nums.length/2
  end

end
