function hello(name) {

  const test = () => {
    //name is the closure here
    console.log(name);
    console.log("everything worked");
  };

  return test;
}

let returnedFunc = hello("Kevin");
returnedFunc();
