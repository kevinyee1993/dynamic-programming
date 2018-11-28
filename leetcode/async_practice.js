// function doWhatever() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(() => console.log("hello")), 2000);
//   })
// }
//
// async function asyncCheck() {
//   doWhatever().then(m => m());
//   console.log("console");
// }
//
// // doWhatever();
// asyncCheck();

// function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("a done"), 1000);
//   });
// }
//
// function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("b done"), 1000);
//   });
// }
//
// async function c(callback) {
//   let results1 = await a();
//   let results2 = await b();
//
//   console.log(results1);
//   console.log(results2);
//   console.log("hello");
//
//   // await a().then(m => results1 = m);
//   // await b().then(m => results2 = m);
//
//
//   return callback(results1, results2);
// }

// c((a, b) => console.log(a,b));

function a() {
  return new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve("a done"), 1000);
  });
}

// promise takes a callback with 2 args resolve and reject
// then runs the function and either calls resolve or reject accordingly
// await used on promise that may still be pending

function b() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve("b done"), 1000);
  });
}

async function c(callback) {
  let result1 = await a();
  let result2 = await b();

  callback(result1, result2);
}

c((a, b) => console.log(a, b));
