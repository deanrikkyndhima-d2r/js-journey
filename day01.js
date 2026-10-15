
//1 Variables

let message = "Hello";
message = "World"; // the value changes

const birthday = "15.10.2026";
//birthday = "01.01.2000"; // Error: Assidnment to constant variable.

console.log(message);
console.log(birthday);


//2. Data Types
let age = 25; //Number
let name = "Dean"; //String
let isCoding = true; //Boolean
let zeroValue = null;
let unknownVar; // undrfined (automatically assigned)

//Backticks allow embedding variabless
console.log(`Hello, ${name}. You are ${age} years old.`);
console.log(typeof zeroValue); // "objet"  (an offitial JavaScript quirk)


//3. Type Conversions
let value = true;
value = String(value); //now it is the string "true"

let str = "123";
let num = Number(str); //now it is the number 123

let nonNumeric = Number("abc"); //NaN

console.log(Boolean(1)); // true
console.log(Boolean("")); //false


// 4. Basic Operators
let apple = "2";
let orange = "3";

// Binary + concatenates string
console.log(apple + orange); // "23"

// Unary + converts them to numbers first
console.log(+apple + +orange); // 5

let counter = 2;
counter++; //counter becomes 3
console.log(counter);


// 5. Comparisons
console.log( 2 > 1 ); // true
console.log( 'z' > 'A' ); // true 

// Regular vs Strict equality
console.log( 0 == false ); // true (because 0 is converted to false)
console.log( 0 === false ); // false (different types: number vs boolean)

console.log( null == undefined ); // true
console.log( null === undefined ); // false






// Exercise A: Predict, then run

// 12
console.log(1 + "2");
// 3
console.log("5" - 2);
// 10 *
console.log("5" * "2");
// 2
console.log(true + 1);
// 1
console.log(null + 1);
// NaN *
console.log(undefined + 1);
// false
console.log(0.1 + 0.2 === 0.3);
// Number *
console.log(typeof NaN);
// true
console.log([] == false);
// baNaNa *
console.log("b" + "a" + +"a" + "a");

