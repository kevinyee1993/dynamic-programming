class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    # @frog_hops_bottom_up_cache = {}
    @frog_hops_top_down_cache = {0 => [], 1 => [ [1] ], 2 => [ [1,1], [2] ], 3 => [[1,1,1], [1, 2], [2,1], [3]]}
    @super_from_hops_cache = {}
    @knapsack_cache = {}
    @maze_solver_cache = {}

  end

#actually did this bottom up first, ask about this
#is there any case where bottom up vs top down is better?
  def blair_nums(n)
    return @blair_cache[n] unless @blair_cache[n].nil?

    (3..n).each do |el|
      @blair_cache[el] = @blair_cache[el-1] + @blair_cache[el - 2] + (1 + 2*(el-2))
    end

    @blair_cache[n]
  end


  def frog_hops_bottom_up(n)
    cache = frog_cache_builder(n)
    cache[n]

  end

  def frog_cache_builder(n)
    cache = {0 => [], 1 => [ [1] ], 2 => [ [1,1], [2] ], 3 => [[1,1,1], [1, 2], [2,1], [3]]}

    (4..n).each do |el|

      cache[el] = []

      cache[el-3].each do |arr1|
          new_el = [3] + arr1
          cache[el] << new_el
      end

      cache[el-2].each do |arr2|
          new_el = [2] + arr2
          cache[el] << new_el
      end

      cache[el-1].each do |arr3|
          new_el = [1] + arr3
          cache[el] << new_el
      end


    end

    cache
  end

  def frog_hops_top_down(n)
    frog_hops_top_down_helper(n)
    frog_hops_bottom_up(n)
  end

  def frog_hops_top_down_helper(n)

  end


# n = number of stairs
# k = maximum jumping power of the frog
  def super_frog_hops(n, k)
    if k == 1 || n == 1
      answer = [[]]
      n.times do |i|
        answer[0] << 1
      end

      return answer
    elsif n == 2 && k == 2
      return [[1, 1], [2]]
    end

    # if n == 1 && k == 1
    #   return [[1]]
    # elsif n == 2 && k == 1
    #   return [[1,1]]
    # elsif n == 2 && k == 2
    #   return [[1, 1], [2]]
    # end


  end

  def knapsack(weights, values, capacity)
    return 0 if capacity <= 0 || weights.length == 0
    solution_table = knapsack_table(weights, values, capacity)
    solution_table[capacity][-1]

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)
    solution_table = []

    #build solutions for knapsacks of increasing capacity
    (0..capacity).each do |i|
      solution_table[i] = []

      #go through the weights one by one by index
      (0...weights.length).each do |j|
        if i == 0
          #if the capacity is 0, then 0 is the only value that can be placed into this slot
          solution_table[i][j] = 0
        elsif j == 0
          #for the first item in our list we can check for capacity
          #if our weight < capacitt, put 0, otherwise put value
          solution_table[i][j] = weights[0] > i ? 0 : values.first
        else
          #the first option is the entry considering the previous item at this capacity
          option1 = solution_table[i][j - 1]

          #the second option (assuming enough capacity) is the maximized value of the smaller bag
          option2 = i < weights[j] ? 0 : solution_table[i - weights[j]][j - 1] + values[j]

          #choose the max of these options
          optimum = [option1, option2].max

          solution_table[i][j] = optimum
        end
      end
    end
    solution_table
  end

#BONUS PROBLEM
  def maze_solver(maze, start_pos, end_pos)
  end
end
