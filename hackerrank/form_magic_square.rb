
def find_cost(magic_square, input_matrix)
  total_cost = 0

  for i in 0...magic_square[0].length
    for j in 0...magic_square.length
      cost = (magic_square[i][j] - input_matrix[i,j]).abs
      total_cost += cost
    end
  end

  total_cost
end


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
