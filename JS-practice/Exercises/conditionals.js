// Exercise 2.1.10
{ // Exercise 1: Positive number check
    let number = 5;
    if (number > 0) console.log("Positive number");
}

{ // Exercise 2: Even or odd
    let number = 7;
    if (number % 2 === 0) console.log("Even");
    else console.log("Odd");
}

// Exercise 3: Age check
{
  let age = 18;
  if (age >= 18) console.log("You are an adult");
}

// Exercise 4: Compare two numbers
{
  let firstNumber = 10;
  let secondNumber = 10;
  if (firstNumber === secondNumber) console.log("Numbers are equal");
  else console.log("Numbers are different");
}

// Exercise 5: Check password match
{
  let storedPassword = "abc123";
  let enteredPassword = "abc123";
  if (storedPassword === enteredPassword) console.log("Access granted");
}

// Exercise 6: Grade checker
{
  let score = 85;
  if (score >= 90) console.log("A");
  else if (score >= 80) console.log("B");
  else if (score >= 70) console.log("C");
  else if (score >= 60) console.log("D");
  else console.log("F");
}

// Exercise 7: Login system
{
  let storedUsername = "student";
  let storedPassword = "abc123";
  let username = "student";
  let password = "abc123";

  if (username === storedUsername && password === storedPassword) {
    console.log("Login successful");
  } else if (username === storedUsername) {
    console.log("Incorrect password");
  } else {
    console.log("User not found");
  }
}

// Exercise 8: Maximum of three numbers
{
  let a = 12;
  let b = 27;
  let c = 19;
  let maximum = a;
  if (b > maximum) maximum = b;
  if (c > maximum) maximum = c;
  console.log(maximum);
}

// Exercise 9: Eligibility check
{
  let age = 21;
  let hasValidId = true;
  if (age >= 18 && hasValidId) console.log("Eligible");
  else console.log("Not eligible");
}

// Exercise 10: Weather clothing suggestion
{
  let temperature = 24;
  if (temperature >= 30) console.log("Wear shorts");
  else if (temperature >= 20) console.log("Wear a T-shirt");
  else if (temperature >= 10) console.log("Wear a jacket");
  else console.log("Wear a coat");
}

// Exercise 11: Nested discount system
{
  let isMember = true;
  let purchase = 75;
  if (isMember) {
    if (purchase >= 50) console.log("20% discount applied");
    else console.log("10% discount applied");
  } else {
    console.log("No discount");
  }
}

// Exercise 12: Triangle type checker
{
  let sideA = 5;
  let sideB = 5;
  let sideC = 8;
  if (sideA === sideB && sideB === sideC) console.log("Equilateral");
  else if (sideA === sideB || sideA === sideC || sideB === sideC) console.log("Isosceles");
  else console.log("Scalene");
}

// Exercise 13: Complex login security
{
  let wrongPasswordAttempts = 3;
  let usernameIsBanned = false;
  let hour = 22;
  if (wrongPasswordAttempts >= 3 || usernameIsBanned || hour < 7 || hour > 21) {
    console.log("Access denied");
  } else {
    console.log("Access allowed");
  }
}

// Exercise 14: Bus fare calculator
{
  let age = 30;
  let today = "Sunday";
  let fare;
  if (age < 5) fare = 0;
  else if (age <= 17) fare = 1.5;
  else if (age <= 64) fare = 3;
  else fare = 2;
  if (today === "Sunday") fare *= 0.5;
  console.log(`Final fare: $${fare.toFixed(2)}`);
}

// Exercise 15: Advanced number classification
{
  let number = 12;
  if (number > 0) console.log(number % 2 === 0 ? "Positive even" : "Positive odd");
  else if (number < 0) console.log("Negative");
  else console.log("Zero");
}