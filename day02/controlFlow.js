
//1. Conditional Branching: if and ?
// The if statement
let year = 2026;

if(year === 2026){
    console.log("Your are in the correct year!");

}else if(year < 2026){
    console.log("That is in the past.");

}else{
    console.log("Welcome to the future!");
}

// The Conditional Operator ? (Ternary)
let age = 20;
let accessAllowed = (age >= 18) ? "Granted" : "Denied";
console.log(accessAllowed);


// 2. Logical Operators
// Logical OR (||)
console.log( true || false ); // true
console.log( null || 1 || 0 ); // // 1 (first truthy value)
console.log( undefined || 0 || null ); // null (all falsy, returns last)
// Logical AND ( $$ )
console.log( true && false ); // false
console.log( 1 && 5 && 0 && 10); // 0 (first falsy value)
console.log( 1 && 2 && 3); // 3 (all truthy, returns last)
// Logical NOT (!)
console.log(!true ); // false
console.log( !0 ); // true (0 is falsy, inverse is true)
console.log( !!"Hello"); // true (converts string to true)


// 3. Nullish Coalescing Operator ??
let height = 0;
console.log(height || 100); // 100 (0 is falsy, so it falls back to 100)
console.log(height ?? 100); // 0 (0 is a valid defined value, so it is kept)


// 4. Loops: while and for
// while
let i = 0;
while(i < 3){
    console.log(i); // 0, 1, 2
    i++;
}
// do while Loop
let j = 0;
do{
    console.log(j); // 0
    j++;
}while(j < 0);
// The for Loop
// for (begin; condition; step)
for (let k =0; k < 3; k++){
    console.log(k); // 0, 1, 2
}
/*
break: Instantly forces the loop to stop entirely.
continue: Stops the current iteration early and skips directly to the next one.*/

// 5. The "switch" Statement
let browser = "chrome";

switch (browser){
    case "Edge": 
      console.log("You've got Edge!");
      break;
    case "chrome":
    case "Firefox": 
      console.log("We support these browsers too.");
      break;
    default:
        console.log("We hope this page looks good!");

}
