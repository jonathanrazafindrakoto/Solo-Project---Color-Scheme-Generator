// Type Confusion Debugging Exercise
// This script has several type-related bugs. Can you find and fix them?

console.log("🐛 Type Confusion Debugging Challenge 🐛");
console.log();

// Bug 1: Addition vs Concatenation
console.log("=== Math Quiz ===");
let mathAnswer = 5 + 3;  // We want to add 5 + 3
console.log("What is 5 + 3?");
console.log("Answer: " + mathAnswer);
console.log("Is this correct? " + (mathAnswer === 8));
console.log();

// Bug 2: String Comparison Surprises
console.log("=== Number Comparison ===");
let firstScore = 100;
let secondScore = 20;
console.log("First score: " + firstScore);
console.log("Second score: " + secondScore);
console.log("Is first score higher? " + (firstScore > secondScore));
console.log();

// Bug 3: Unexpected Type Conversion
console.log("=== User Age Validation ===");
let userAge = 25;  // This came from user input
let minimumAge = 18;
let isOldEnough = userAge >= minimumAge;
console.log("User age: " + userAge);
console.log("Minimum age: " + minimumAge);
console.log("Is user old enough? " + isOldEnough);
console.log("Type of userAge: " + typeof userAge);
console.log("Type of minimumAge: " + typeof minimumAge);
console.log();

// Bug 4: Calculation Gone Wrong
console.log("=== Shopping Cart Total ===");
let item1Price = 10.99;
let item2Price = 5.50;
let tax = 1.25;
let total = item1Price + item2Price + tax;
console.log("Item 1: $" + item1Price);
console.log("Item 2: $" + item2Price);
console.log("Tax: $" + tax);
console.log("Total: $" + total);
console.log();

// Bug 5: Boolean Logic Confusion
console.log("=== User Permissions ===");
let isLoggedIn = false;  // This came from a form
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log("Is logged in: " + isLoggedIn + " (type: " + typeof isLoggedIn + ")");
console.log("Has permission: " + hasPermission + " (type: " + typeof hasPermission + ")");
console.log("Can access: " + canAccess);
console.log();

console.log("🤔 Something seems wrong with these results...");
console.log("Can you identify and fix the type-related bugs?");