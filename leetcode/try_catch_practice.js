class FakeError extends Error {
  constructor(message) {
    super(message);
    this.name = "FAKEError";
  }
}

function test(input) {
  try {
    if(input) {
      console.log(input);
    } else {
      throw new FakeError("No input submitted!!!?!?!?!?!?!??!?!!!!?!?");
    }
  } catch(e) {
    console.log(e);
  }
}

test("hello");
test();
