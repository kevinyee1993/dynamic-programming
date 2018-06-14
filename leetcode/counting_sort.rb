def counting_sort(input)
  count_arr = Array.new(input.max + 1, 0)
  output_arr = []


  input.each do |el|
    count_arr[el] += 1
  end

  for i in 1..count_arr.length - 1
    count_arr[i] += count_arr[i - 1]
  end


  input.each do |el|
    count = count_arr[el]
    output_arr[count] = el
    count_arr[el] -= 1
  end

  p output_arr
end

counting_sort([6,4,2,6,5,3,7,2])
