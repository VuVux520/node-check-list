var Promise = require('bluebird');
const { get } = require('request');
var ping = require('ping');
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
//
Promise.props({
    name: getName(),
    age: getAge(),
    sex: getSex()
}).then(result =>{
    console.log(result.name, result.age, result.sex);
})
//
Promise.some([
    {name: 'Thanh'},
    {name: 'Vu'}
],1).spread((first) => {
    console.log(first)
})

//
Promise.map([1,2,3], num => {
    return num*2;
}).then(numbers => {
    console.log(numbers);
})

const P2 = Promise.filter([1,2,3], num => {
    return num % 2 === 0;
}).then(numbers => {
    console.log(numbers);
})

const P1 = Promise.reduce([1,2,3],(num,total) => {
    return total + num;
},0).then(numbers => {
    console.log(numbers);
})

const P = [P1,P2];

Promise.allSettled(P).then((results) => results.forEach((result) =>
    console.log(result.isRejected())
))
const promise1 = new Promise(reject => reject('Fail'))
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
Promise.any([promise1]).catch((err) => {
    console.log(err);
})
Promise.race(promises).then((value) => console.log(value));