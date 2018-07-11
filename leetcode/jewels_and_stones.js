var numJewelsInStones = function(J, S) {

};

function createJewelHash(J) {
  let jewelHash = {};

  for(let i = 0; i < J.length; i++) {
    let currChar = J[i];
    if(!jewelHash[currChar]) {
      jewelHash[currChar] = true;
    }
  }

  return jewelHash;
}

console.log(createJewelHash("abc"));
