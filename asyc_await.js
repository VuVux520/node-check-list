const fetch = require("node-fetch");
async function hi(){
  return "Hi!!!";
}

const b = hi();

b.then(x => console.log(x));
async function myFunction2() {
    return Promise.resolve(console.log("Hello"));
}
myFunction2().then(
    function(value) { /* code if successful */ },
    //function(error) { /* code if some error */ }
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
      let response = await fetch('http://google.com.vn');
      console.log('fetch successful')
    } catch(err) {
      throw err;// TypeError: failed to fetch
    }
  }
f();

function wait1s() { 
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve('Resolving...');
    }, 1000);
  })
}

async function asyncCall(){
  console.log('Calling');
  const result = await wait1s();
  console.log(result);
}

asyncCall();

function getProcess(url){
  return download(url).catch(e => {
    return
  })
}

function wait (s) {
  return new Promise((resolve) => {
    setTimeout(resolve,s);
  })
}

async function whatsUp(){
  for(var i = 0; i < 10; i++) {
    await wait(2000);
    console.log('Chao ban');
  }
}

whatsUp();