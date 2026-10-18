
// 1. let is block scoped
if (true) {
    let message = "Hello";
    console.log(message); // Works
}

//console.log(message); // Error


//2. var is NOT block scoped
if (true) {
    var name = "Dean";
}

console.log(name);//var escapes the block and is visible outside.


//3. Function can read global variables
let city = "Polokwane";

function showCity() {
    console.log(city);
}

showCity();
// Functions can access globals.  Globals cannot access function-local variables.


// 4. Variable Shadowing
let color = "blue";

function showColor() {
    let color = "red";
    console.log(color);
}

showColor();
console.log(color);
//Inside the function, "red" shadows "blue".
//Outside the function, the original "blue" still exists.


//5. Classic Loop Problem
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0);
}



