// dfs in a graph uses a stack
/*
when you visit a node, put one of its children into the stack
visit the current node by printing it and mark it as visited

check the stack for the newest element
visit one of that element's children

print current node and mark it as visited
so on and so forth

once you get to a child that is not connected to any unvisited nodes
print it out
pop the current node off the stack
check the next element to see if it has any unvisited children

continue until no more unvisited children and then just keep popping stuff off the stack

note: only print a node if it is marked as unvisited
*/


// bfs uses queue
/*
visit node
print and mark as visited
add all children to queue
mark each children as visited and print them

after done with root node, move to the first element on the queue
dequeue whatever element you're looking at
check all of its children
visit, mark as visited, and print



*/
