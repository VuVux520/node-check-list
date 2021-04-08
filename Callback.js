function notify() {
    console.log("YO!!!!");
}
function taskOne(callBack){
    callBack();
}
taskOne(notify);

Var someUlr = …;

/* function successCallback(){
   //success code
}

function completeCallback(){
   //complete code
}

function errorCallback(){
   //error code
}

$.ajax({
   url: someUrl,
   success: successCallback,
   complete: completeCallback,
   error: errorCallback
}) */