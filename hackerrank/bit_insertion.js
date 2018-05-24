function insertion(N, M, i, j) {
  //clear bits from j-i

  M = M << i;
  return N | M;
}

let a = 32;
//100000
let b = 3;
//11

console.log(insertion(a, b, 2, 3));

//101100
//32 + 8 + 4 => 44

//1111
//clear 3-2
//0011 & 1111 => 0011
//for(let count = 0; count <= (j - i); i++) {
//  num & ~(1 << (i - count))
//}



//page 115
