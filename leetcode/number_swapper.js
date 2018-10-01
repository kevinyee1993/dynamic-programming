// swap numbers without temporary variables
// O(1) time and space
function numberSwapper(a, b) {
  console.log("a is", a);
  console.log("b is", b);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log("a is", a);
  console.log("b is", b);
}
