/**
 * OOP Debugging Exercise
 * Find and fix all the bugs in this Object-Oriented Programming code!
 */

class Animal {
  /**
   * Base class for animals
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.species = "Unknown";
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  getInfo() {
    return `${this.name} is a ${this.age} year old ${this.species}`;
  }
}

class Dog extends Animal {
  /**
   * Dog class - inherits from Animal
   */
  constructor(name, age, breed) {
    // BUG 1: Missing super() call
    // super(name, age) to fix the bug
    super(name, age);
    this.breed = breed;
    this.species = "Dog";
  }

  speak() {
    // BUG 2: Arrow function binding issue with 'this'
    const speakFn = () => {
      return `${this.name} says Woof!`;
    };
    return speakFn();
  }

  fetch(item) {
    return `${this.name} fetches the ${item}`;
  }
}

class Cat extends Animal {
  /**
   * Cat class - inherits from Animal
   */
  constructor(name, age, indoor = true) {
    super(name, age);
    // BUG 3a: Wrong species assignment
    this.species = "Cat";
    this.indoor = indoor;
  }

  speak() {
    // BUG 3b: Wrong sound
    return `${this.name} says Meow!`;
  }

  // BUG 3: Method name typo
  getInfo() {
    const info = super.getInfo();
    const location = this.indoor ? "indoor" : "outdoor";
    return `${info} (${location})`;
  }
}

class BankAccount {
  /**
   * Bank account with balance management
   */
  
  // BUG 4: Using class fields without constructor
  constructor(balance = 0, accountHolder = ""){
    this.balance = balance;
    this.accountHolder = accountHolder;
  }


  deposit(amount) {
    // BUG 5: Should modify instance variable properly
    if (amount > 0) {
      this.balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    // BUG 6: Logic error - allows negative balance
    // BUG 6b: Also subtracts double the amount
    if(amount > 0 && this.balance >= amount) {
    this.balance -= amount;
    return true;
  }
  return false;
}


  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  /**
   * Savings account with interest
   */
  constructor(accountHolder, initialBalance = 0, interestRate = 0.02) {
    super();
    // BUG 7a: Swapped assignment - holder and balance mixed up
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.interestRate = interestRate;
  }

  applyInterest() {
    // BUG 7: Variable scope issue - 'interestRate' not defined
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    return interest;
  }
}

class ShoppingCart {
  /**
   * Shopping cart for e-commerce
   */
  constructor() {
    this.items = [];
  }

  addItem(itemName, price, quantity = 1) {
    const item = {
      name: itemName,
      // BUG 8a: Price and quantity swapped
      price: price,
      quantity: quantity
    };
    this.items.push(item);
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      // BUG 8: Missing multiplication by quantity
      total += item.price * item.quantity;
    }
    return total;
  }

  removeItem(itemName) {
    // BUG 9: forEach with splice creates index shifting bug
    this.items.forEach((item) => {
      if (item.name === itemName) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    });
    return true;
  }
}

// Test code - uncomment to test your fixes
if (require.main === module) {
  console.log("Testing Dog class:");
  const dog = new Dog("Buddy", 5, "Golden Retriever");
  console.log(dog.speak());
  console.log(dog.getInfo());
  console.log(dog.fetch("ball"));

  console.log("\nTesting Cat class:");
  const cat = new Cat("Whiskers", 3, true);
  console.log(cat.speak());
  console.log(cat.getInfo());

  console.log("\nTesting BankAccount:");
  const account = new SavingsAccount("Alice", 1000);
  account.deposit(500);
  console.log(`Balance: $${account.getBalance()}`);
  account.applyInterest();
  console.log(`Balance after interest: $${account.getBalance()}`);

  console.log("\nTesting ShoppingCart:");
  const cart = new ShoppingCart();
  cart.addItem("Apple", 1.50, 3);
  cart.addItem("Banana", 0.75, 5);
  console.log(`Total: $${cart.getTotal()}`);
}

module.exports = {
  Animal,
  Dog,
  Cat,
  BankAccount,
  SavingsAccount,
  ShoppingCart
};
