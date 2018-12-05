const test = function() {
  console.log(this.name);
};

let kelving = {name: 'kelving'};
let butt = test.bind(kelving);
butt();
