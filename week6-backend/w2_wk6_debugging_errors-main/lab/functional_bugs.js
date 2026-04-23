/**
 * Functional Programming Debugging Exercise
 * Find and fix all the bugs in this functional programming code!
 * Remember: Pure functions, immutability, no side effects!
 */

// BUG 1: Function has side effects - modifies input array
// BUG 1b: Also returns wrong calculation (triples instead of doubles)
// fixed by using map to create a new array and multiplying by 2 instead of 3
function doubleNumbers(numbers) {
  return numbers.map(x => x * 2);
}

// BUG 2: Function is not pure - uses external variable

function countCalls(x) {
  let counter = 0;

  counter += 1;
  return x * 2;
}

// BUG 3: map() returns array, but missing return statement
// added return statement to fix the bug
function squareNumbers(numbers) {
  return numbers.map(x => x ** 2);
}

function filterEven(numbers) {
  // BUG 4: Logic error - filtering odd numbers instead of even
  // fixed by changing condition to x % 2 == 0
  return numbers.filter(x => x % 2 == 0);
}

// BUG 5: reduce without initial value can cause issues
// added initial value of 0 to fix the bug
function sumNumbers(numbers) {
  return numbers.reduce((acc, x) => acc + x, 0);
}

function compose(f, g) {
  // BUG 6: Wrong order of composition - should be f(g(x))
  // changed to return x => f(g(x)) to fix the bug
  return x => f(g(x));
}

function getNames(people) {
  // BUG 7: Missing return statement
  // added return statement to fix the bug
  return people.map(person => person.name);
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  // BUG 8: Off by one error - dividing by wrong length
  // removed -1 from numbers.length to fix the bug
  return sumNumbers(numbers) / (numbers.length);
}

// BUG 9: Function mutates input object
// fixed by returning a new object with updated age instead of modifying the original
function updatePersonAge(person, newAge) {
  return { ...person, age: newAge };
}

function factorial(n) {
  // BUG 10: Missing base case check for n <= 1
  // BUG 10b: Wrong base case value

  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function flattenList(nestedList) {
  // BUG 11: Using forEach with push instead of reduce or flat
  const result = [];
  nestedList.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flattenList(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

// Higher-order function bugs
function applyDiscount(discountPercent) {
  // BUG 12: Logic error - discount calculation is wrong
  return price => price - (price * discountPercent/100);
}

function createMultiplier(factor) {
  // BUG 13: Closure issue - using wrong variable name
  return x => x * factor;
}

// BUG 14: Not properly handling array immutability
function addToArray(arr, item) {
  return [...arr, item];
}


// BUG 15: Sorting mutates original array
function sortNumbers(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

// Test code - uncomment to test your fixes
if (require.main === module) {
  console.log("Testing doubleNumbers:");
  const nums = [1, 2, 3, 4];
  const result = doubleNumbers(nums);
  console.log(`Original: [${nums}], Result: [${result}]`);

  console.log("\nTesting filterEven:");
  console.log(filterEven([1, 2, 3, 4, 5, 6]));

  console.log("\nTesting sumNumbers:");
  console.log(sumNumbers([1, 2, 3, 4, 5]));

  console.log("\nTesting compose:");
  const addOne = x => x + 1;
  const multiplyTwo = x => x * 2;
  const composed = compose(multiplyTwo, addOne);
  console.log(`compose(multiplyTwo, addOne)(5) = ${composed(5)}`);

  console.log("\nTesting updatePersonAge:");
  const person = { name: "Alice", age: 25 };
  const updated = updatePersonAge(person, 26);
  console.log(`Original: ${JSON.stringify(person)}, Updated: ${JSON.stringify(updated)}`);

  console.log("\nTesting factorial:");
  console.log(`factorial(5) = ${factorial(5)}`);

  console.log("\nTesting flattenList:");
  console.log(flattenList([1, [2, 3], [4, [5, 6]]]));

  console.log("\nTesting sortNumbers:");
  const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
  const sorted = sortNumbers(unsorted);
  console.log(`Original: [${unsorted}], Sorted: [${sorted}]`);
}

module.exports = {
  doubleNumbers,
  countCalls,
  squareNumbers,
  filterEven,
  sumNumbers,
  compose,
  getNames,
  calculateAverage,
  updatePersonAge,
  factorial,
  flattenList,
  applyDiscount,
  createMultiplier,
  addToArray,
  sortNumbers
};
