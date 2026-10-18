//Tip Calculator
function calculateTip(bill, tipPercent, people){
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const costPerPerson = total / people;

    return{
        tip,
        total,
        costPerPerson
    };

}

console.log(calculateTip(250, 15, 4));


// Prime Checker
function isPrime(n){
    if(n < 2) return false;

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));


// Grade Calculator
function getGrade(score){
    if(score >= 90) return "A";
    if(score >= 80) return "B";
    if(score >= 70) return "C";
    if(score >= 60) return "D";

    return "F";

}
console.log(getGrade(95));
console.log(getGrade(73));
console.log(getGrade(40));

//4. FizzBuzz
function fizzBuzz(n){
    if(n % 15 === 0) return "FizzBuzz";
    if(n % 3 === 3) return "Fizz";
    if(n % 5 === 0) return "Buzz";

    return n.toString();
}
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}