def staircase(n)
    for i in 1..n
        new_stair = "#"
        spaces = " "
        str = (spaces * (n - i)) + (new_stair * i)
        print str + "\n"
    end

end
