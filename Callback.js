function notify() {
    console.log("YO!!!!");
}
function taskOne(callBack){
    callBack();
}
taskOne(notify);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function greet(name, Callback) {
    console.log('Hi' + ' ' + name);
    Callback();
}

function callMe() {
    console.log('Callback');
}
setTimeout(callMe,1)
greet('Vu', callMe);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function download(url, callBack) {
    setTimeout(() => {
        console.log(`Downloading ${url}`);
        callBack(url)
    },1000);
}

let url = 'http://google.com.vn';

download(url,((picture) => console.log(`Processing ${picture}`)))


/* function successCallback(){
   //success code
}

function completeCallback(){
   //complete code
}

function errorCallback(){
   //error code
}