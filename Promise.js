var lodash = require('lodash');

function job() {
    return console.log('hello world');
}

let result = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        job();
    },2000);
})

////////////////////////////////////////////////////////////////////////////
var imHappy=false;

var willGoOut = new Promise((resolve, reject) => {
    if(imHappy){
        resolve();
    }else{
        reject();
    }
});

var happyOrNot = () => {
    willGoOut.then(() => {(happy)=> {
        console.log('You are going out');
    }}).catch((err) => {
        console.log('You sad you stay home and cry')
    })
}

happyOrNot();