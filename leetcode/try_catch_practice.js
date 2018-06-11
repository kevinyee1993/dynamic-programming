function test(input) {
  try {
    if(input) {
      console.log(input);
    } else {
      throw new Error("No input submitted!!!?!?!?!?!?!??!?!!!!?!?");
    }
  } catch(e) {
    console.log(e);
  }
}

test("hello");
test();
