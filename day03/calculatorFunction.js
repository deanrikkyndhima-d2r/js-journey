
function calculate(a, operator, b){
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
             if (b === 0) {
                return "Error: Cannot divide by zero";
            }
            return a / b;
        
        default:
            return "Error: Unknown operator";;    
            
    }
}

// Tests
console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 5));