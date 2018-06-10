def matchingStrings(strings, queries)
  str_counts = str_counter(strings)
  answer = []

  queries.each do |str|
    if(str_counts[str])
      p str_counts[str]
      answer << str_counts[str]
    else
      p 0
      answer << 0
    end
  end

  answer

end

def str_counter(str_arr)
  counts = {}

  str_arr.each do |str|
    if(!counts[str])
      counts[str] = 1
    else
      counts[str] += 1
    end
  end

  return counts

end

matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc'])
