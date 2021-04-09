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

promise.then((data) => {
    console.log('All done');
    data.forEach((text)=>{
        console.log(text);
    });
});