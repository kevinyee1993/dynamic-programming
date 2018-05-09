class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_hops_bottom_up_cache = {}
    @frog_cache_builder_cache = {}
    @frog_hops_top_down_cache = {}
    @super_from_hops_cache = {}
    @knapsack_cache = {}
    @maze_solver_cache = {}

  end

  def blair_nums(n)
    return @blair_cache[n] unless @blair_cache[n].nil?

    (3..n).each do |el|
      @blair_cache[el] = @blair_cache[el-1] + @blair_cache[el - 2] + (1 + 2*(el-2))
    end


    @blair_cache[n]
  end

  def frog_hops_bottom_up(n)

  end

  def frog_cache_builder(n)

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
