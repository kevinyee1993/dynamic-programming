def form_magic_square(input_matrix)
  magic_square = [[4,9,2],
                  [3,5,7],
                  [8,1,6]]
  min_cost = nil

  4.times do
    curr_cost = find_cost(magic_square, input_matrix)
    min_cost = curr_cost if min_cost.nil? || curr_cost < min_cost
    magic_square = rotate_matrix(magic_square)
  end

  min_cost
end


def find_cost(magic_square, input_matrix)
  total_cost = 0

  for i in 0...magic_square[0].length
    for j in 0...magic_square.length
      cost = (magic_square[i][j] - input_matrix[i][j]).abs
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

a = [[4,8,2],
    [4,5,7],
    [6,1,6]]

p form_magic_square(a)
