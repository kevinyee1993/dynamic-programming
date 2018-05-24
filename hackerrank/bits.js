function getBit(num, i) {
  return (num & (1 << i)) !== 0;
}

function setBit(num, i) {
  let hasBit = ((num & (1 << i)) !== 0);
  if(hasBit) {
    num -= (1 << i);
  } else {
    num += (1 << i);
  }

  return num;
}

function clearBit(num, i) {
  let mask = ~(1 << i);
  return num & mask;
}

function updateBit(num, i, v) {
  let mask = ~(1 << i);
  num = num & mask;
  return num | (v << i);
}
//1011 = 11
//mask = 011
//updateVal = 100
//mask = 111
//1011 111 = 1111

//1111 = 15
console.log(updateBit(11, 2, 1));
