def longest_palindrome(s)

end

# O(n^2) time naive solution
# Two pointers - one at beginning one at end
# Move the end point down until you either hit the bginning pointer
# or you find a palindrome

# if you find a palindrome, move the beginning point up by one and
# start the loop again.

# Have a variable keeping track of the longest palindrome so far
# Continuously update it until you finish looping through everything
