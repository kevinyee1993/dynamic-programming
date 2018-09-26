

function towerHopper(towers) {
  let potentialDistances = calcPotDist(towers);
  let answer = true;

  let currTower = 0;


  // O(n^2) time?
  // O(1) space
  while(currTower < towers.length) {
    let currPotDist = potentialDistances[currTower];
    let biggestFound = 0;
    let biggestIndex;


    if(towers[currTower] === 0) {
      answer = false;
    }

    if(currTower + towers[currTower] > towers.length - 1) {
      answer = true;
      break;
    }

    for(let i = currTower + 1; i <= currPotDist; i++ ) {
      if(potentialDistances[i] > biggestFound) {
        biggestFound = potentialDistances[i];
        biggestIndex = i;
      }
    }

    currTower = biggestIndex;
  }

  return answer;
}


// O(n) time
// O(n) space
function calcPotDist(towers) {
  let potentialDistances = [];

  for(let i = 0; i < towers.length; i++) {
    potentialDistances[i] = towers[i] + i;
  }

  return potentialDistances;
}

const towers = [4,3,0,2,0,0];
console.log(towerHopper(towers));
