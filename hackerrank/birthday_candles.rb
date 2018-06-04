# time complexity: O(n) because have to go through the array twice (separately)
#                  once to determine max and once to count maxes
# space complexity: O(1) because just creating 2 vars no matter what

def birthdayCakeCandles(ar)

    max = ar.max
    num_candles = 0

    ar.each do |el|
      num_candles += 1 if el == max
    end

    num_candles

end
