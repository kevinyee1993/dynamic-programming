def is_happy(n)
  return true if n == 1
  

end

def sumSquareNum(n)
  sum = 0

  until n <= 0
    last_digit = n % 10
    n /= 10
    sum += (last_digit * last_digit)
  end

  sum
end

p sumSquareNum(82)
