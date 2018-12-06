// O(nlog(n)) time
// O(n) space
function subarraySort(array) {
  // Write your code here.
	const arrayCopy = [...array];

  arrayCopy.sort( (a,b) => {
    if(a > b) {
      return 1;
    } else {
      return - 1;
    }
	});

	let firstDifference;
	let lastDifference;
	let updateLastDifference = true;
	let updatedFirstDifference = false;

	for(let i = 0; i < array.length; i++) {
	  if(!updatedFirstDifference) {
		  if(array[i] !== arrayCopy[i]) {
				firstDifference = i;
				updatedFirstDifference = true;
			}
		} else {
			if(array[i] === arrayCopy[i]) {
			  if(updateLastDifference) {
				  lastDifference = i - 1;
					updateLastDifference = false;
				}
			} else {
			  updateLastDifference = true;
			}
		}
	}

	if(updateLastDifference) {
	  lastDifference = array.length - 1;
	}

  // console.log(firstDifference);
  // console.log(lastDifference);

	if(firstDifference !== undefined && lastDifference !== undefined) {
		 return [firstDifference, lastDifference];
  } else {
		return [-1,-1];
	}
}

console.log(subarraySort([2,1]));
