var shortestToChar = function(S, C) {
  // everytime you reach a C, previousC becomes 0
  // everytime you progress without hitting a C, this increments
  // reset to 0 everytime you encounter a new C
  let previousC = null;

  // create a method to find the next C's position
  let nextC = null;

  // You want use whichever value previousC || nextC which is lower
  // and then add that to the array
  // can just use previousC but for nextC you wanna use nextC - currentIndex
  
};
