# time: O(n) because have to go through the entire array once

# space: O(n) because creating hash which could possibly take as many
# elements as how many elements there are in worst case


def majority_element(nums)

  counter = {}
  big_boys = []

  nums.each do |el|
    unless counter[el]
      counter[el] = 1
    else
      counter[el] += 1
     end

     big_boys << el if counter[el] > nums.length/3
  end

  big_boys.uniq

end

p majority_element([1,1,1,3,3,2,2,2])
