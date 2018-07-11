// O(n) time and space

var numJewelsInStones = function(J, S) {
  const jewelHash = createJewelHash(J);
  let jewelCount = countJewelsInStones(jewelHash, S);

  return jewelCount;
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

function countJewelsInStones(jewelHash, S) {
  let jewelCount = 0;

  for(let i = 0; i < S.length; i++) {
    let currChar = S[i];

    if(jewelHash[currChar]) {
      jewelCount++;
    }
  }

  return jewelCount;
}
