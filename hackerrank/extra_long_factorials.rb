def extraLongFactorials(n)
    product = 1

    while(n > 0)
        product *= n
        n -= 1
    end

    p product

end
