# time: O(n)
# space: O(n)

def longest_substr(s)
  return 0 if s.length < 1
  curr_start = 0
  letter_tracker = {}
  longest_length = 0
  longest_word = s[0]

  for i in 0...s.length
    char = s[i]

    if(!letter_tracker[char])
      letter_tracker[char] = i
      length = s[curr_start..i].length

      if(length > longest_length)
        longest_length = length
        longest_word =  s[curr_start..i]
      end

    else
      length = s[curr_start...i].length

      if(length > longest_length)
        longest_length = length
        longest_word =  s[curr_start...i]
      end

      curr_start = letter_tracker[char] + 1 if curr_start < letter_tracker[char] + 1
      letter_tracker[char] = i
    end

    if(s[curr_start..i].length > longest_length)
      longest_length = s[curr_start..i].length
      longest_word  = s[curr_start..i]
    end

  end


  longest_word.length
end

# p longest_substr("aubzaa")
# p longest_substr("auuaz")
# p longest_substr("tmmzuxt")

# right now only calculating the length when i hit a duplicate but
# also need to calculate the length if no duplicates are found at the
# very end
