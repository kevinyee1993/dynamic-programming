// O(nlog(n)) time
// O(n^2) space
function kClosest(points, k) {
  const sortedPoints = sortPoints(points);
  return sortedPoints.slice(0,k);
}

// this is where optimization can happen at least for space complexity
// change to a quickSort where you use references rather than creating new arrays

// O(nlog(n)) time

// O(n^2) space where n is the depth - each call stack is creating 2 more call stacks
// actually need to check the space complexity for this.
function sortPoints(points) {
  if(points.length <= 1) {
    return points;
  }

  let midPoint = Math.floor(points.length / 2);
  let left = [];
  let right = [];
  let pivot = points[0];

  for(let i = 1; i < points.length; i++) {
    let pivotTotal = sumDistance(pivot);
    let currPoint = points[i];
    let currPointTotal = sumDistance(currPoint);

    if(currPointTotal <= pivotTotal) {
      left.push(currPoint);
    } else {
      right.push(currPoint);
    }
  }

  return sortPoints(left).concat([pivot]).concat(sortPoints(right));
}

// O(1) time and space
function sumDistance(point) {
  return Math.abs(point[0]) + Math.abs(point[1]);
}

const points = [[-2,4], [0,-2], [-1,0], [3,5], [-2,-3], [3,2]];
console.log(kClosest(points, 2));
