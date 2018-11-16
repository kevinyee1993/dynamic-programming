// O(n) time where n is the number of elements in the array
// O(1) space
function subSort(arr) {
  let currSum = 0;
  let largestSum = -Infinity;
  let startIdx = 0;
  let endIdx = 0;

  let maxStartIdx = 0;
  let maxEndIdx = 0;


  for(let i = 0; i < arr.length; i++) {
    let currValue = arr[i];
    currSum += currValue;
    if(currSum > 0) {
      endIdx++;

      if(currSum > largestSum) {
        maxEndIdx = i;
      }

      endIdx++;
    } else {
      currSum -= arr[i];
      if(currSum > largestSum) {
        maxStartIdx = startIdx;
      }

      i++;
      currValue = arr[i];
      currSum = currValue;
      startIdx = i;
    }
  }

  return arr.slice(maxStartIdx, maxEndIdx + 1);
}

console.log(subSort([2, -8, 3, -2, 4, -10]));
// whenever currSum is negative, ignore whatever came before that
// start again with the next element



/* levels problem
<!DOCTYPE html>
<html>
  <head>
    <title>Warehouse</title>
    <style>
      /* Write your CSS solution here */
      li:nth-of-type(1) {
        font-weight: bold;
      }

      li:nth-of-type(2) {
        font-style: italics;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>Warehouse
        <ul>
          <li>London
            <ul>
              <li>10 cabbages</li>
              <li>5 avocados</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>Yorkshire
            <ul>
              <li>5 pumpkins</li>
              <li>20 carrots</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </body>
</html>
*/


// second problem implement quick fix to an existing website's font without
// modifying the HTML
/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Capital Cities</title>
  </head>
  <style>
     /* Write your CSS solution here (do not edit the surrounding HTML) */
  </style>
  <body>
    <div style="font-family: times">
      <h1>Vancouver, Canada</h1>
      <p>Population: 647,540</p>
    </div>
  </body>
</html>
*/

// answer to upper problem
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Capital Cities</title>
  </head>
  <style>
     /* Write your CSS solution here (do not edit the surrounding HTML) */
    div {
      font-style: italic;
      font-family: "arial", "times" !important
    }
  </style>
  <body>
    <div style="font-family: times">
      <h1>Vancouver, Canada</h1>
      <p>Population: 647,540</p>
    </div>
  </body>
</html>
