class Person {
  constructor(name) {
    this.name = name;
    // this.testFunction = this.testFunction.bind(this);


    this.testFunction = () => {
      console.log(this.name);
    };
  }

}

let person = new Person("kelving");

let methurd = person.testFunction;

let hash = {1: true, 2: true};

Object.keys(hash).forEach(el => {
  if(hash[el]) {
    console.log("hello");
  }
});





// let a = function(greeting, compliment) {
//   console.log(greeting + " " + this.name + compliment);
// };
//
// let person1 = new Person("kevin");
// let args = ["hello", " you a snack brody"];
// // a.apply(person1, args);
// a.call(person1, "hello", " u da bes");
