def add_digits(num)
  return num if num < 10

  last_digit = num % 10
  num /= 10

  answer = last_digit + add_digits(num)

  return answer if answer < 10
  add_digits(answer)
end

p add_digits(38)
