def nth_ugly_number(n)
  ugly_numbers = {1: true, 2: true, 3: true, 4: true, 5: true}

  return 1 if n == 0

  if()



end

def is_prime?(num)
  for i in 2...num
    return false if num % i == 0
  end

  true
end

def div235(num)
  num % 2 == 0 ||
  num % 3 == 0 ||
  num % 5 == 0
end

p div235(2)
p div235(3)
p div235(5)
