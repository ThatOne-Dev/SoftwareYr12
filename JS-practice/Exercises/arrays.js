// Exercise 1: Favourite foods
{
  let foods = ["pizza", "sushi", "tacos"];
  console.log(foods);
  console.log(foods.length);
}

// Exercise 2: First and last
{
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(days[0]);
  console.log(days[days.length - 1]);
}

// Exercise 3: Shopping list
{
  let shopping = ["milk", "bread"];
  shopping.push("eggs");
  shopping.unshift("apples");
  console.log(shopping);
}

// Exercise 4: Canteen queue
{
  let queue = ["Ana", "Ben", "Chen", "Dev", "Ella"];
  queue.shift();
  queue.pop();
  console.log(queue);
}

// Exercise 5: Missing number
{
  let nums = [1, 2, 4, 5];
  nums.splice(2, 0, 3);
  console.log(nums);
}

// Exercise 6: Change a colour
{
  let colours = ["red", "green", "blue"];
  colours[1] = "yellow";
  console.log(colours);
}

// Exercise 7: Build a sentence
{
  let words = ["I", "love", "coding"];
  console.log(words.join(" "));
  words.reverse();
  console.log(words.join(" "));
}

// Exercise 8: Improving or not?
{
  let scores = [12, 18, 7, 20];
  console.log(scores[0]);
  console.log(scores[scores.length - 1]);
  if (scores[scores.length - 1] > scores[0]) console.log("Improved!");
  else console.log("Keep practising");
}