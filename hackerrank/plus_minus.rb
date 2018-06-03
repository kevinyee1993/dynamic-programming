# time complexity: O(n) because have to touch every element of array once
# space complexity: O(1) because always creating 6 variables no matter how big array is

def plusMinus(arr)
    size = arr.length
    negatives = 0
    zeroes = 0
    positives = 0

    arr.each do |el|
        negatives += 1 if el < 0
        zeroes += 1 if el == 0
        positives += 1 if el > 0
    end

    neg_frac = negatives.to_f / size
    zero_frac = zeroes.to_f / size
    pos_frac = positives.to_f / size

    p pos_frac
    p neg_frac
    p zero_frac

end
