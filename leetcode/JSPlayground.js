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

methurd();





// let a = function(greeting, compliment) {
//   console.log(greeting + " " + this.name + compliment);
// };
//
// let person1 = new Person("kevin");
// let args = ["hello", " you a snack brody"];
// // a.apply(person1, args);
// a.call(person1, "hello", " u da bes");
