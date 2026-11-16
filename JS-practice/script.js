// MODULE 1
// console.log("Hello, world");

console.log(42);

let message = "Hello, JavaScript!";
console.log(message);

console.log("I am " + 17 + " years old.");


console.warn("This is a warning message.");
console.error("This is an error message.");

// This is a single-line comment

/*
    This is a multi-line comment.
    It can span multiple lines.
*/

let a = 1; let b = 2; console.log(a + b);

const PI = 3.14159;
console.log("The value of PI is: " + PI);
PI = 3.14; // This will throw an error because PI is a constant

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

{
    let example = "Hello";
    console.log(typeof example); // string
    console.log(typeof 42); // number
    console.log(typeof true); // boolean
}

// MODULE 2

// CONDITIONALS (2.1)
console.log(15 > 10);

console.log(8 =="8"); // true
console.log((4 < 6) && (7 > 3)); // true
console.log((10 !== 10) || true); // true


console.log(5 == "5"); // true
console.log(0 == false); // true

console.log(5 === "5"); // false
console.log(0 === false); // false

{
  let temperature = 35;
  if (temperature > 30) {
    console.log("It's a hot day.");
  }
}

{
  let temperature = 35;
  if (temperature > 30) {
    console.log("It's a hot day.");
  }
  else {
    console.log("It's a pleasant day.");
  }
}

{
  let score = 75;
  if (score >= 90) {
  console.log("Grade: A");
  } else if (score >= 80) {
  console.log("Grade: B");
  } else if (score >= 70) {
  console.log("Grade: C");
  } else {
  console.log("Grade: F");
  }
}

{
  let isMember = true;
  let discountThreshold = 25;
  let totalPurchase = 40;
  if (isMember) {
    if (totalPurchase >= discountThreshold) {
    console.log("You get a 10% discount!");
    } else {
    let difference = discountThreshold - totalPurchase;
    console.log(`Spend $${difference} more to get a discount.`);
    }
  } else {
  console.log("Sign up for membership to get discounts.");
  }
}

// ARRAYS (2.2)

{
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits);
}

{
  
  let myData = ["Hello World", 3.14, false];
  console.log(myData);

}
// LOOPS (2.3)

