// class test {
//   constructor(value) {
//     this.value = value;
//   }
// }

const test = function() {

};

// const test = function(value) {
//   this.value = value;
// };

test.prototype.property = "test";
test.prototype.print = function() {
  console.log(this.property);
};
test.prototype.change = function(str) {
  this.property = str;
};


const a = new test();
a.change("farts");
a.print = function() {
  console.log("donkey");
};

// a.print();

// const b = new test();
// b.print();
// a.print();
const subclass = function() {
  // test.call(this);
};

subclass.prototype = {...test.prototype};
// console.log(test.prototype);
console.log(subclass.prototype);

let fartz = new subclass();
fartz.print = function() {
  console.log("poot");
}
// fartz.print();
// a.print();

// fartz.print();