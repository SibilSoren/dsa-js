// Example Learning Session File
// Topic: JavaScript Closures (Example)
// Date: 2026-02-05

/**
 * This is an EXAMPLE of what a learning session file looks like.
 * When you run /js-learn, a file like this will be created with
 * interactive examples for today's topic.
 */

// ============================================
// SECTION 1: Basic Closure Example
// ============================================

function outerFunction() {
    const outerVariable = "I'm from outer scope!";

    function innerFunction() {
        // innerFunction has access to outerVariable
        // even though outerVariable is not in innerFunction's own scope
        console.log(outerVariable);
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I'm from outer scope!"

// The inner function "closes over" the outer variable
// This is a closure!

// ============================================
// SECTION 2: Practical Example - Counter
// ============================================

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter1 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.getCount());  // 2

const counter2 = createCounter();
console.log(counter2.getCount());  // 0 (separate instance!)

// ============================================
// SECTION 3: Exercise - Try It Yourself!
// ============================================

// TODO: Create a function called createBankAccount that:
// 1. Has a private balance variable
// 2. Returns an object with:
//    - deposit(amount) - adds to balance
//    - withdraw(amount) - subtracts from balance (if sufficient funds)
//    - getBalance() - returns current balance

function createBankAccount(initialBalance) {
    // Your code here!
}

// Test your implementation:
// const account = createBankAccount(100);
// account.deposit(50);
// console.log(account.getBalance()); // Should be 150
// account.withdraw(30);
// console.log(account.getBalance()); // Should be 120

/**
 * NOTES SECTION
 * 
 * Key Takeaways:
 * - Closures allow functions to access variables from outer scope
 * - They enable data privacy (encapsulation)
 * - Each closure has its own copy of the variables
 * - Common use cases: factories, private data, event handlers
 * 
 * Questions to think about:
 * - What happens to the outer variables when the outer function finishes?
 * - How is this different from global variables?
 * - When might closures cause memory issues?
 */
