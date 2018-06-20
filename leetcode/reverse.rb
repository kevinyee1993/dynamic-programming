# time complexity: O(n)
# space complexity: O(n)

def reverse(x)
    is_negative = false
    num_to_string = ""

    if(x < 0)
        x *= -1
        is_negative = true
    end

    num_to_string = x.to_s.reverse
    answer = num_to_string.to_i

    return answer *= -1 if is_negative
    answer
end

p reverse(123)
p reverse(-123)
p reverse(120)
