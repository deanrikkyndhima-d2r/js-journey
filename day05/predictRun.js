
console.log([1, 2, 3].map((n) => { n * 2}));
// [undefined, undefined, undefined]
// When you use {} in an arrow function, you must explicitly return a value. Here nothing is returned

console.log([10, 9, 1, 100].sort());
// [1, 10, 100, 9]
// Why? sort() converts elements to strings and sorts lexicographically (alphabetically) by default

console.log([1, 2, 3].includes("2"));
// false
// 2 is a number not a string

console.log([..."hello"]);
// ['h', 'e', 'l', 'l', 'o']
// The spread operator breaks the string into individual characters

console.log([1, 2, 3, 4].reduce((acc, n) => acc + n));
// 10
// Reduction

console.log([[1, 2], [3]].flat());
// [1, 2, 3]
// flat() removes one level of nesting

console.log([].every((x) => x > 5));
// true
// This is called vacuous truth. Since there are no elements that fail the test, every() returns true

console.log([3, 1, 2].sort() === [3, 1, 2].sort());
// false
// Arrays are objects. === compares references, not contents

console.log(Array(3).fill(0));
// [0, 0, 0]
// Creates an array with 3 empty slots and fills them with 0





