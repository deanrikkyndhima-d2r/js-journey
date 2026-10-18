// 1. Capitalize
function capitilize(str){
    return str.charAt(0).toUpperCase() + str.slice(1); 
}
console.log(capitilize("hello"));
console.log(capitilize("world"));
console.log(capitilize("javascript"));

// 2. Sum
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(5, 10));
console.log(sum());

//3. Average
function average(...numbers){
    if(numbers.length === 0) return 0;
    return sum(...numbers) / numbers.length;
}
console.log(average(2, 4, 6));
console.log(average(10, 20));
console.log(average());

// 4. Palindrome
function isPalindrom(str){
    const cleaned = str.toLowerCase().replace(/\s/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrom("Race Car"));
console.log(isPalindrom("Level"));
console.log(isPalindrom("Helllo"));

// 5. Clamp
function clamp(value, min, max){
    return Math.min(Math.max(value, min), max);
}
console.log(clamp(15, 0, 10));
console.log(clamp(5, 0, 10));
console.log(clamp(-5, 0, 10));

// 6. Even / Odd
function isEven(n){
    return n % 2 === 0;
}

function isOdd(n){
    return n % 2 !== 0;
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isOdd(4));
console.log(isOdd(7));

// 7. Repeat
function repeat(str, times = 2) {
    return str.repeat(times);
}
console.log(repeat("ab", 3));
console.log(repeat("hi"));
console.log(repeat("x", 5));

// 8. Truncate
function truncate(str, maxLength){
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + "...";
}
console.log(truncate("Hello World", 8));
console.log(truncate("JavaScript", 6));
console.log(truncate("Hi", 10));