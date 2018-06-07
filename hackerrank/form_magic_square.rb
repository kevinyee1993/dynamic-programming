def rotate_matrix(matrix)
  rotated = Array.new(3)

  3.times do |idx|
    rotated[idx] = Array.new(3)
  end

  for i in 0...matrix.length
    for j in 0...matrix.length
      # rotated[j][matrix.length - 1 - i]
      # p j
      rotated[j][matrix.length - 1 - i] = matrix[i][j]
    end
  end

  rotated
end

a = [[1,2,3],
     [4,5,6],
     [7,8,9]]

p rotate_matrix(a)
