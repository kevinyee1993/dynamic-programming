# time complexity: O(n^2) where n is the min string's length
# space complexity: O(n) because creating a new string

def longest_common_prefix(strs)
  return "" if strs.empty?

  prefix = ""

  # O(n)
  min_word = strs.min

  for i in 0...min_word.length
    curr_letter = min_word[i]

    strs.each do |word|
      if word[i] != curr_letter
        return prefix
      end
    end

    prefix += curr_letter

  end

  prefix
end

p longest_common_prefix(["flower", "flow", "flight"])
p longest_common_prefix(["dog", "racecar", "car"])
