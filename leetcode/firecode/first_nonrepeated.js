// O(n) time and space
function firstNonrepeatedCharacter(str) {
  const charCounter = {};
  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if(!charCounter[currChar]) {
      charCounter[currChar] = 1;
    } else {
      charCounter[currChar]++;
    }
  }

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if(charCounter[currChar] === 1) {
      return currChar;
    }
  }

  return null;
}


// Mock interview notes
/*
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        console.log(i);
      }, 1000 * i);
    }

    // it will print "10", 10 times after 1 second.
    // it will print 0,1,2... after 1 second.



    // var and let
    // var => functionally scoped
    // let => lexicon scope.

    will print 9's after 10 seconds.


    2. What is closure in Javascript? Can you give me an example?

      function fxn1(a) {

    		let test = 1;
    		let a, b,c

    		let fxn2 = function (a,b,c) {
    			console.log(a);
    		}

    	return fxn2;
    }

    let a = fxn1();
    a();

    // closure has access to variables that are defined outside of its scope.





    // stack = [] => push in numbers to it
    // keep track of the minimum
    // if you pop off values from the stack, update the minimum

    // [] => pop off the 3
    // 2 => would still retain the 3

    push()
    pop() //O(1) O(n)
    getMin()

    // 10, 2, 1 ,3
    // min = 10, 2, 1

    class numberNode {
       constructor(value, prevMin) {
    		this.value = value;
    		this.prevMin = prevMin;
    	}
    }


    // push(10)
    // push(5)
    // push(6)


    // stack = [  ]
    // minValue = null

    //{ value: 6, 5 }
    //{ value: 5, 10 }
    //{ value:10, prevMin = null }

    class minStack {
    	constructor() {
    		this.stack = [];
    		this.minValue = null;
    	}

    	// O(1)
    	push(val) {
    		if(!this.minValue || val < this.minValue) {
    			this.minValue = val;
    	}

    		// more elements, more memory to store all the nodes
    		let newNum;

    	if(val < this.minValue) {
      	newNum = new numberNode(val, this.prevMin);
    	} else {
    		newNum = val;
    	}

    // if the new number is not a new min, just push in the number rather than making a new object

    		stack.push(newNum);
    	}

     // O(1)
    	pop2() {
    		let poppedElement = this.stack.pop();
    // check to see if popped element is object
    // change code accordingly
    		// if(this.minValue === poppedElement.value) {
    		if(typeof poppedElement === "Object")
    			this.minValue = poppedElement.prevMin;
    		}

    		return poppedElement;
    	}


     // O(1)
    	getMin() {
    		return this.minValue;
    	}

    }

*/
