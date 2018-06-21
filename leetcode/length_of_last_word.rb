# time: O(n)
# space: O(n) -> can optimize but just wanted to make it look nice


def length_of_last_word(s)
  return 0 if s.length == 0
  rev_str = s.reverse
  letter_count = 0

  rev_str.each_char do |letter|
    if(letter_count == 0 && letter == " ")
      next
    elsif(letter == " " || letter.nil?)
      return letter_count
    else
      letter_count += 1
    end
  end

  letter_count
end

p length_of_last_word("a    s")
