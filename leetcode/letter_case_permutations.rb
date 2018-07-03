def letter_case_permutation(s)
  lowercase_str = s.downcase

  permutations = [lowercase_str]

  letter_indices = find_letters(lowercase_str)

  for i in 0...letter_indices.length
    temp_str = lowercase_str.dup

    for j in i...letter_indices.length
      temp_str[letter_indices[j]] = temp_str[letter_indices[j]].upcase
      permutations << temp_str.dup
    end

  end

  permutations

end

def find_letters(s)
  letter_indices = []

  for i in 0...s.length
    letter_indices << i if /[a-zA-Z]/.match(s[i])
  end

  letter_indices
end


p letter_case_permutation("a1b2")
