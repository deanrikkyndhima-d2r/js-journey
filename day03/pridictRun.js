function hello() {}
console.log(hello()); // Returns undefined

//
console.log(typeof add); // function
console.log(typeof sub); // undefined
function add(){}
var sub = function (){};

//
const g = (x) => x * 2;
console.log(g(4)); // return 8

//
function test(a, b = a * 2){
    return a + b;
}
console.log(test(3)); // 9
console.log(test(3, 1)); // 4

//
console.log((function (...args) { return args.length; })(1, 2, 3));

