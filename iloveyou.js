var fs = require('fs');
var promise = require("bluebird");
var request = require('request');
var photoLinks = [{link: 'https://pht.qoo-static.com/kbHoCAE38Mxvoad5NPxFwA0dXmPD1kPqFaL1k-qAXlBaSAeBeuMZHW1GZwcMdN_P8Q=h640',
    name: 'sky1.jpg'},
    {link: 'https://cdn.tgdd.vn/GameApp/3/229047/Screentshots/sky-children-of-the-light-03-03-2021-0.png',
    name: 'sky2.jpg'}
];

function getPhoto(photoLink){
    return new Promise(function(fulfill, reject) {
        request.get(photoLink.link)
            .on('error', function (err) {
                err.photo = photoLink.link;
                reject(err);
            })
            .pipe(fs.createWriteStream(photoLink.name)
                .on('finish', function () {
                    fulfill(photoLink.name);
                }).on('error', function (err) {
                    reject(err);
                })
        );
    });
}
console.time("getPhoto");
promise.map(photoLinks, function(item){
  return getPhoto(item);
}, {concurrency: 6}).then(function(result){
    console.log(result);
    console.timeEnd("getPhoto");
}).catch(function(err){
    console.log(err);
});