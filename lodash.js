const { forOwn } = require('lodash');
var lodash = require('lodash');
var _ = require('lodash/core');

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

function square (n){
  return n * n;
}
//_.flatten(array)
var a = _.flatten([1, [2, 3, [4]]]);

//_.join(array, [separator=','])
var b = lodash.join(['a', 'b', 'c'], '~');
var str = lodash.join(['home','dustin','github','test_lodash'], '/');

//_.filter(collection, [predicate=_.identity])
var c = _.filter(users, function(o) { return !o.active; });
var e = _.filter(users, { 'age': 36, 'active': true });
var f = _.filter(users, ['active', false]);
let numbers = [1, 2, 4, 7, 3, 5, 6];
function isOddNumber(number) {
  return number % 2;
}
const oddNum = lodash.filter(numbers, isOddNumber);
console.log(oddNum);
//_.map(collection, [iteratee=_.identity])
var d = _.map([2,2],square)
var g = _.map(users, 'user')
var t = _.map({'a': 4, 'b': 5},square);

//_.reduce(collection, [iteratee=_.identity], [accumulator])
var r = _.reduce([1,2], ((sub,n) => sub - n), 0);

//_.merge(object, [sources])
var object = {
  'a': 1,
  'b': 2,
  'c': 3
}
var other = {
  'a':[{'b':3,'c':4}]
}

var merge = lodash.merge(object, other);

//_.omit(object, [paths])
var omit1 = lodash.omit(object,['a']);
var omit2 = lodash.omit(object,['b']);
var omit3 = lodash.omit(object,['c']);

//_.pick(object, [paths])
var object1 = { 'a': 1, 'b': '2', 'c': 3 };
var pick = lodash.pick(object1,['a','c'])
var pick2 = lodash.pick(object1,['b'])

//_.assign(object, [sources])
function foo() {
    this.a = 2;
  }
function bar() {
    this.c = 3;
  }
var assign = lodash.assign({'a':'new value'},foo , new bar)

//_.get(object, path, [defaultValue])
var object2 = { 'a': 1, 'b': 2, 'c': 3 };
var get = lodash.get(object2, 'b');

//_.spread( func, start )
var sub = lodash.spread((x,y)=>{
  return x - y;
})
var write = lodash.spread(((author, year) => author + ' ' + year + ' !'))

//_.method(path, args)
var gfg = [
  { 'a': { 'b': lodash.constant("Uy") } },
  { 'a': { 'b': lodash.constant("Vu") } },
  { 'a': { 'b': lodash.constant("1999") } }
];

var value = [
  { 'a':{'b': lodash.constant("123")}},
  { 'a':{'b': lodash.constant("456")}}
]
var i = lodash.map(gfg,lodash.method('a.b'))
var j = lodash.map(value, lodash.method('a.b'))

console.log(i)
console.log(j)

/* console.log(write(['Vu','1999']))
console.log(sub([30,21]))
console.log(get) */