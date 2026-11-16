// Exercise 1: Count to 10
for (let i = 1; i <= 10; i++) console.log(i);

// Exercise 2: Even numbers
for (let i = 2; i <= 20; i += 2) console.log(i);

// Exercise 3: Lift off
{
  let count = 5;
  while (count >= 1) {
    console.log(count);
    count--;
  }
  console.log("Lift off!");
}

// Exercise 4: Times table
{
  let n = 7;
  for (let i = 1; i <= 12; i++) console.log(`${n} x ${i} = ${n * i}`);
}

// Exercise 5: My subjects
{
  let subjects = ["English", "Maths", "Science"];
  for (let subject of subjects) console.log(subject);
}

// Exercise 6: Add them up
{
  let numbers = [4, 8, 15, 16, 23, 42];
  let total = 0;
  for (let number of numbers) total += number;
  console.log(total);
}

// Exercise 7: Count the vowels
{
  let word = "javascript";
  let vowelCount = 0;
  for (let letter of word.toLowerCase()) {
    if ("aeiou".includes(letter)) vowelCount++;
  }
  console.log(vowelCount);
}

// Exercise 8: Highest temperature
{
  let temps = [24, 31, 19, 35, 28];
  let highest = temps[0];
  for (let temp of temps) {
    if (temp > highest) highest = temp;
  }
  console.log(highest);
}

// Exercise 9: FizzBuzz
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// Exercise 10: Savings goal
{
  let balance = 100;
  let years = 0;
  while (balance < 200) {
    balance *= 1.1;
    years++;
  }
  console.log(`Years: ${years}`);
  console.log(`Final balance: $${balance.toFixed(2)}`);
}