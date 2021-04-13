var Promise = require('bluebird');
const { get } = require('request');
var readFile = Promise.promisify(require('fs').readFile);
//new Promise(function(function resolve, function reject) resolver) -> Promise
function getConnection(urlString){
    return new Promise(function(resolve){
        var params = parseUrl(urlString);
        resolve(getAdapter(params).getConnection());
    });
}

//.then
// Promise.resolve(1)
// .then((x) => x + 1)
// .then((x) => x + 1)
// .then((x) => console.log(x))
// .catch(console.error)

//.spread([function(any values...) fulfilledHandler]) -> Promise
const Promise1 = new Promise((resolve, reject) =>{
    throw 'Catch this!!!'
})
Promise1.catch((error) =>{
    console.error(error);
})


const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(450).then(() => console.log('ILoveYou!'));

//finally, catch
/* promise
    .then(result => {
        // process the result
    })
    .catch(error => {
        // handle the error
    })
    .finally(() => {
        // clean up the resources
    }); */
//Promise.all()
function work(delay) {
    return new Promise((resolve) =>{
        setTimeout(() => console.log('Resolving',delay));
        resolve('done' + delay);
    },delay);
}

var promise = Promise.all([work(300), work(500), work(1000), work(2000)]);

Promise.all([readFile('file.txt'),readFile('file2.txt')]).then((file) =>{
    console.log(file[0].toString(), file[1].toString());
    }).catch(function(err){
        console.error('Cannot not read file ' + err.message);
    });
//
promise.then((data) => {
    console.log('All done');
    data.forEach((text)=>{
        console.log(text);
    });
});

function guessMyName(name){
    return Promise.try(function(){
        if(name !== "Vu"){
            throw new Error(name + " aint my name")
        }
        else{ 
            console.log('Thats right that is my name');
    }})
}
guessMyName('Vu');
function getName(){
    return 'Thanh';
}

function getAge(){
    return '21';
}

function getSex(){
    return 'female';
}
//Promise.join();
Promise.join(getName(),getAge(),getSex(), function(name, age, sex){
    console.log("Joined: " + name + " " + age + " " + sex);
});

Promise.resolve([1,2,3]).get(-1).then((x)=>{
    console.log(x);
})

let step1 = () => {
    new Promise((resolve, reject) => {
        resolve(console.log('This is step 1'));
    })
}

let step2 = () => {
    new Promise((resolve, reject) => {
        var things = 'This is something';
        return Promise.map(things, (things)=>{

        })
    })
}