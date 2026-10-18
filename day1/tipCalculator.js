
// Input: bill amount, tip percent, number of people.

let billAmount = 250;
let tipPercent = 15;
let numOfPeople = 4;

// Calculations
let tip = billAmount * (tipPercent / 100);
let total = billAmount + tip;
let costPerPerson = total / numOfPeople;

//Output
console.log(`Bill Amount: R${billAmount.toFixed(2)}`);
console.log(`Tip: R${tip.toFixed(2)}`);
console.log(`Total: R${total.toFixed(2)}`);
console.log(`Cost Per Person: R${costPerPerson.toFixed(2)}`);


