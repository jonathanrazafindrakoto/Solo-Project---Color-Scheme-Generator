// Fictional Character Profile Generator
// This script creates a profile for an imaginary character

// Store information about your character
let characterName = "RAZAFINDRAKOTO Jonathan";
let characterAge = 21; // Fantasy characters can be any age!
let species = "elf";
let magicalPower = "controlling starlight";
let favoriteWeapon = "enchanted bow";
let homeland = "the Crystal Forest";

// Calculate some interesting facts
let yearsOfExperience = characterAge - 18; // Assuming they started training at 18
let powerLevel = characterAge * 2;
let halfAge = characterAge / 2;

// Create the character profile
console.log("=================================");
console.log("    CHARACTER PROFILE");
console.log("=================================");
console.log();
console.log("Name: " + characterName);
console.log("Age: " + characterAge + " years");
console.log("Species: " + species);
console.log("Special Power: " + magicalPower);
console.log();
console.log("Background:");
console.log("- Wields a " + favoriteWeapon + " with great skill");
console.log("- Calls " + homeland + " their home");
console.log("- Has been training for " + yearsOfExperience + " years");
console.log();
console.log("Stats:");
console.log("- Current Power Level: " + powerLevel);
console.log("- Half their current age: " + halfAge);
console.log("- Years until next century: " + (200 - characterAge));
console.log();
console.log("Adventure awaits!");
console.log("=================================");