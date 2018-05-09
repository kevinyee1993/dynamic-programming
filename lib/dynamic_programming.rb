class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    # @frog_hops_bottom_up_cache = {}
    @frog_hops_top_down_cache = {}
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
    #how to do without nested nested loops
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

  end

  def frog_hops_top_down_helper(n)

  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
