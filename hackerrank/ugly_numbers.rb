def is_prime?(num)
  for i in 2...num
    return false if num % i == 0
  end

  true
end

p is_prime?(2)
p is_prime?(3)
p is_prime?(4)
p is_prime?(5)
p is_prime?(6)
