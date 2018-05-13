def compareTriplets(a0, a1, a2, b0, b1, b2)
  score1 = [a0, a1, a2]
  score2 = [b0, b1, b2]

  score_total_1 = 0
  score_total_2 = 0

  score1.each_index do |idx|
    if score1[idx] > score2[idx]
      score_total_1 += 1
    elsif score2[idx] > score1[idx]
      score_total_2 += 1
    end
  end

  p [score_total_1, score_total_2]
end

compareTriplets(5, 6, 7, 3, 6, 10)
