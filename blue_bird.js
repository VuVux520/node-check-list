//new Promise(function(function resolve, function reject) resolver) -> Promise
function getConnection(urlString){
    return new Promise(function(resolve){
        var params = parseUrl(urlString);
        resolve(getAdapter(params).getConnection());
    });
}

//.then
Promise.resolve(1)
.then((x) => x + 1)
.then((x) => x + 1)
.then((x) => console.log(x))
.catch(console.error)

//.spread([function(any values...) fulfilledHandler]) -> Promise
const Promise1 = new Promise((resolve, reject) =>{
    throw 'Catch this!!!'
})
Promise1.catch((error) =>{
    console.error(error);
})

//finally, catch
promise
    .then(result => {
        // process the result
    })
    .catch(error => {
        // handle the error
    })
    .finally(() => {
        // clean up the resources
    });