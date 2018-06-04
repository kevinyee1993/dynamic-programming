def diagonalDifference(a)
    diag1 = 0
    diag2 = 0

    for i in 0...a.length
        diag1 += a[i][i]
        diag2 += a[a.length - 1 - i][i]
    end

    (diag1 - diag2).abs


end
