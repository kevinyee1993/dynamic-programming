# time complexity: O(n log(n)) because sorting
# space complexity: O(n) because creating arrays which hold the original elements

def miniMaxSum(arr)
    sorted = arr.sort
    small = sorted[0..-2]
    big = sorted[1..-1]

    small_sum = small.inject(0){|sum,x| sum + x }
    big_sum = big.inject(0){|sum,x| sum + x }

    puts "#{small_sum} #{big_sum}"

end
