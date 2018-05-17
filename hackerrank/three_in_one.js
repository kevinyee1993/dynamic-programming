class ThreeInOne {
  constructor(arr1, arr2, arr3) {
    this.arr1 = arr1;
    this.arr2 = arr2;
    this.arr3 = arr3;

    this.megaArray = [];
    this.combineArr(arr1, arr2, arr3);
  }

  combineArr(arr1, arr2, arr3) {
    for(let i = 0; i < arr1.length * 3; i += 3) {
      let counter = 0;

      this.megaArray[i] = arr1[counter];

      counter++;
    }

    for(let i = 1; i < arr2.length * 3; i += 3) {
      let counter = 0;

      this.megaArray[i] = arr2[counter];

      counter++;
    }

    for(let i = 2; i < arr3.length * 3; i += 3) {
      let counter = 0;

      this.megaArray[i] = arr3[counter];

      counter++;
    }

    console.log(this.megaArray);
  }
}

let a = [1,1,1];
let b = [2,2,2];
let c = [3,3,3];

let combine = new ThreeInOne(a,b,c);
combine.combineArr(a,b,c);
