# O(n) time, O(1) space

def plus_one(digits)
    digits.each_with_index{ |el, idx|
        digits[digits.length - 1 - idx] += 1
        if(digits[digits.length - 1 - idx] % 10 != 0)
            return digits
        else
            digits[digits.length - 1 - idx] = 0
        end
    }

    if(digits[0] == 0)
        digits.unshift(1)
    end

    digits
end


p plus_one([9])
