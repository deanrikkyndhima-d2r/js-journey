
// celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

// celsius to Kelvin
function celsiusToKelvin(celsius){
    return (celsius + 273.15);
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit){
return (fahrenheit - 32) * 5 / 9;
}

// Kelvin to Celsius
function kelvinToCelsius(kelvin){
    return kelvin = 273.15;    
}

// Test
console.log(`25 C = ${celsiusToFahrenheit(25).toFixed(2)}F`);
console.log(`25 C = ${celsiusToKelvin(25).toFixed(2)}K`);
console.log(`77 F = ${fahrenheitToCelsius(77).toFixed(2)} C`);
console.log(`298.15k = ${kelvinToCelsius(298.15).toFixed(2)} C`);
