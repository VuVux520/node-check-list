var lodash = require('lodash');
const fetch = require("node-fetch");

function job() {
    return console.log('hello world');
}

let result = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        job();
    },2000);
})

////////////////////////////////////////////////////////////////////////////

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  let requests = urls.map(url => fetch(url));
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log('Fetched'))
    );
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