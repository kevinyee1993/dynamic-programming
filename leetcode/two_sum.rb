# time complexity: O(n)
# space complexity: O(n)

# brute force soln -> time = O(n^2), space -> O(1)


def two_sum(arr, target)
  value_idx_tracker = {}

  arr.each_with_index do |el, idx|
      complement_num = target - el

      if(!value_idx_tracker[el])
        value_idx_tracker[el] = idx
      elsif(value_idx_tracker[el] &&
      complement_num == el &&
      value_idx_tracker[el] != idx)
        return [value_idx_tracker[el], idx]
      end

      idx1 = value_idx_tracker[complement_num]
      idx2 = value_idx_tracker[el]

      if(value_idx_tracker[complement_num])

        if(idx1 != idx2)
          return [value_idx_tracker[complement_num], value_idx_tracker[el]]
        end
      end
  end

  nil
end

p two_sum([3,3], 6)
