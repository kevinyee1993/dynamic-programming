# brute force solution
# VERY inefficient, definitely need to optimize it at least for time complexity
def count_binary_ones(num)
  num_ones = 0
  bin_rep = convert_num_to_binary(num)

  for i in 0..bin_rep.length
    if(bin_rep[i] == '1')
      num_ones += 1
    end
  end

  num_ones
end

def next_number(num)
  og_num_ones = count_binary_ones(num)
  next_smallest = nil
  next_largest = nil

  small_track = num - 1
  big_track = num + 1

  until(next_smallest || small_track < 0)
    if(count_binary_ones(small_track) == og_num_ones)
      next_smallest = small_track
    end

    small_track -= 1
  end

  until(next_largest)
    if(count_binary_ones(big_track) == og_num_ones)
      next_largest = big_track
    end

    big_track += 1
  end

  [next_largest, next_smallest]

end

def convert_num_to_binary(num)
  bit_track = get_largest_bit(num)

  binary_rep = ""

  until(bit_track == 0)
    if(num >= bit_track)
      binary_rep += "1"
      num -= bit_track
      bit_track /= 2
    else
      binary_rep += "0"
      bit_track /= 2
    end
  end

  binary_rep
end

def get_largest_bit(num)
  return 0 if num == 0
  # return 1 if num == 1
  bit_track = 1

  until bit_track > num
    bit_track *= 2
  end

  bit_track / 2
end

# p get_largest_bit(5)
# p convert_num_to_binary(10)
# p count_binary_ones(10)
p next_number(3)
