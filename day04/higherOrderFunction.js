
// 1. myMap(array, fn)
// returns a new array with fn applied to every element

function myMap(array, fn){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(fn(array[i]));
    }

    return result;

}

// 2. myFilter(array, fn)
// Return only the elements for which fn return true

function myFilter(array, fn) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

// 3. compose(f, g)
// compose(f, g)(x) = f(g(x))

function compose(f, g){
    return function(x){
        return f(g(x));
    };
}

// 4. multiplyBy(n)
//  Returns a new function that remembers n using a closure

function multiplyBy(n){
    return function (value){
        return value * n;
    };
}



// Test the Code

const numbers = [1, 2, 3, 4, 5];

// muyMap
const doubled = myMap(numbers, n => n * 2);

console.log(doubled);
// [2, 4, 6, 8, 10]
// Each number is multiplied by 2

// compere with built-in map
console.log(numbers.map(n => n * 2));
// [2, 4, 6, 8, 10]

// myFilter
const evens = myFilter(numbers, n => n * 2 === 0);

console.log(evens);
// [2, 4]
// only even numbers remain

// compare with built-in filter
console.log(numbers.filter(n => n % 2 === 0));
// [2,4]

// compose
const add3 = x => x + 3;
const double = x => x * 2;

const combined = compose(add3, double);

console.log(combined(5));
// 13
// double(5) = 10
// add3(10) = 13

// multiplyBy
const doubleNumber = multiplyBy(2);
const tripleNumber  = multiplyBy(3);

console.log(doubleNumber(5));
// 10

console.log(tripleNumber(5));
// 15

// Each function remembers its own n value

