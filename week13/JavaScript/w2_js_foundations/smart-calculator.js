// Smart Calculator
// This calculator can do different operations and give helpful responses

console.log("🧮 Welcome to the Smart Calculator! 🧮");
console.log();

// Let's define some numbers to work with
let firstNumber = 5;
let secondNumber = 15;
let birthYear = 2004;
let currentYear = 2025;
let temperature = 75;
let message = "hello world"

console.log("Today we're working with " + firstNumber + " and " + secondNumber);
console.log();

// Basic operations
let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
let percentage = (firstNumber / secondNumber) * 100;
let myAge = currentYear - birthYear;
message = "hello world".toUpperCase();

console.log("📊 CALCULATION RESULTS:");
console.log("Addition: " + firstNumber + " + " + secondNumber + " = " + sum);
console.log("Subtraction: " + firstNumber + " - " + secondNumber + " = " + difference);
console.log("Multiplication: " + firstNumber + " × " + secondNumber + " = " + product);
console.log("Division: " + firstNumber + " ÷ " + secondNumber + " = " + quotient);
console.log("Percentage: " + firstNumber + " is " + percentage + "% of " + secondNumber);
console.log("Age Calculation: If born in " + birthYear + ", age in " + currentYear + " is " + myAge);
console.log("Message in Uppercase: " + message);
console.log();
// Let's make it smart - give different responses based on results
console.log("🤖 SMART ANALYSIS:");

if (sum > 20) {
  console.log("Wow! The sum is greater than 20. That's a big number!");
} else {
  console.log("The sum is 20 or less. Nice and manageable!");
}

if (firstNumber > secondNumber) {
  console.log("The first number (" + firstNumber + ") is larger than the second (" + secondNumber + ")");
} else if (secondNumber > firstNumber) {
  console.log("The second number (" + secondNumber + ") is larger than the first (" + firstNumber + ")");
} else {
  console.log("Both numbers are equal!");
}

if (quotient === Math.floor(quotient)) {
  console.log("Perfect division! " + firstNumber + " divides evenly into " + secondNumber);
} else {
  console.log("Division gives us a decimal: " + quotient);
}

if (myAge < 18){
    console.log("You are a minor.");
} else if (myAge >= 18 && myAge < 65){
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

if (temperature > 80) {
  console.log("It's quite hot outside! Stay hydrated.");
} else if (temperature < 60) {
  console.log("It's a bit chilly. Don't forget your jacket!");
} else {
  console.log("The weather is pleasant today.");
}

console.log();
console.log("🎉 Calculation complete! Thanks for using Smart Calculator!");