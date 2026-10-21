// 1. Functions are values: store them, pass them, return them
const sayHi = function () { return "hi"; };
const fns = [sayHi, (x) => x * 2];

// 2. Higher-order function: takes a function and/or returns one
function applyTwice(fn, value) {
  return fn(fn(value));
}
applyTwice((x) => x + 3, 10); // 16

// 3. Callback: a function you pass in to be called later
[1, 2, 3].forEach((n) => console.log(n * 2));
setTimeout(() => console.log("later"), 1000);

// 4. Closure: a function remembers the variables from where it was created
function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;   // 'greeting' is remembered
  };
}
const sayHello = makeGreeter("Hello");
const sayHola = makeGreeter("Hola");
sayHello("Ada"); // "Hello, Ada!"
sayHola("Ada");  // "Hola, Ada!"

// 5. Closures keep PRIVATE state
function createCounter() {
  let count = 0;                     // nobody outside can touch this
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count,
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.get(); // 2
// counter.count is undefined: the variable is hidden

// 6. Each call creates a NEW, independent closure
const a = createCounter();
const b = createCounter();
a.increment();
b.get(); // 0

// 7. Why the Day 3 loop problem happens
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 3, 3, 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j), 0); // 0, 1, 2
// var: one shared i for all callbacks. let: a fresh j for each iteration.