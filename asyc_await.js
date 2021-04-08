const fetch = require("node-fetch");
async function myFunction() {
    return "Hello";
}
async function myFunction() {
    return Promise.resolve("Hello");
}

myFunction().then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

// //await is only valid in async function
// function firstAsync() {
//     let promise = Promise.resolve(10);
//     let result = await promise; // Syntax error
// }

//Async/Await thực hiện tuần tự
async function sequence() {
    await promise1(50); // Wait 50ms…
    await promise2(50); // …then wait another 50ms.
    return "done!";
}

async function f() {
    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      console.log(err); // TypeError: failed to fetch
    }
  }
f();