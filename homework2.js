// 1. There is the following code. 
// Add the code so that the lines written in the comments appear in the browser console, while operating with the x and y variables.

let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x < y) + "" + (y / x);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = y > x;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = "x" * y;
console.log(res4); // NaN
console.log(typeof res4); // "number"

// 2. The user enters a number. It is necessary to check whether the entered number is correct.
// a) is positive
// b) is multiple of 7
// Display the result of the check in the console.

let num = prompt("Enter a number to proceed");
console.log(num > 0);
console.log(num % 2 === 0);
console.log(num % 7 === 0);

// 3. Create an empty array.
// 1) Write any number in the first element of the array.
// 2) Write any line in the second element of the array.
// 3) Write any logical value in the third element of the array.
// 4) Write the value null in the fourth element of the array.
// 5) Enter the number of elements stored in the array on the screen.
// 6) Ask the user to enter any value and write this value in the fifth element of the array.
// 7) Display the fifth array element on the screen.
// 8) Delete the 1st element of the array and display the array on the screen.

const calls = [35, "Maximus", true, null];
alert(calls.length);
const userInput = prompt("Enter a value");
alert(calls[4] = userInput);
calls.shift();
alert(calls);

// 4. Write a program that combines all existing elements of the array into a ribbon and separates them with the symbol “*”.
// Initial array:

let cities = ["Rome", "Lviv", "Warsaw"];

// Result:
// " Rome * Lviv * Warsaw "

alert(cities.join(" * "));

// 5. Ask user a question about reaching the age of majority. Record the result in the isAdult variable.
// Depending on the received value, display the appropriate message about the person's status. 
// For example: if the condition is fulfilled, the age is more than 18, output "You have reached the age of majority".
// If the age is less than 18 years, display "You are still too young".

const age = prompt("How old are you?");
const isAdult = (age > 18) ? "You have reached the age of majority" : "You are still too young";
alert(isAdult);

// or

const age2 = +prompt("How old are you?");
if (age2 > 18) {
    alert("You have reached the age of majority");
} else if (age2 < 18) {
    alert("You are still too young");
} else {
    alert("You are 18 y.o.");
}

// 6. User enters the three lengths of the sides of the triangle (use prompt() three times to enter each side).
// Necessary:
// a) determine and display the area of the triangle in the console
// b) check whether this triangle is rectangular and output the check result to the console.
// Validate whether user-entered values are correct, otherwise display 'Incorrect data'.
// Output the result of calculating the area of the triangle to the console with an accuracy of 3 decimal places 
// (for example: 8.42355465 = > 8.424).

let a = prompt("Enter length for the side 1");
let b = prompt("Enter length for the side 2");
let c = prompt("Enter length for the side 3");

const semiPerim = (a + b + c) / 2;
const area = Math.sqrt(semiPerim * ((semiPerim - a) * (semiPerim - b) * (semiPerim - c)));
console.log("The triangle's area is: " + (area.toFixed(3)));

const isRectangular = (a, b, c) => {
   const opt1 = (a * a) === (b * b) + (c * c);
   const opt2 = (b * b) === (a * a) + (c * c);
   const opt3 = (c * c) === (a * a) + (b * b);
   return opt1 || opt2 || opt3;
}
console.log("Is the triangle rectangular? - " + isRectangular(a, b, c));

if (a > 0) {
    alert("Values are fine!");
} else if (b > 0) {
    alert("Values are fine!");
} else if (c > 0) {
    alert("Values are fine!");
} else {
    alert("You've entered incorrect data!");
}

// 7. Write a conditional construction that, depending on the time of day, will display the appropriate greeting.
// You need to get the real time of day from the system. Do it in 2 ways through 2 different conditional operators.
// In the range of hours 23-5 - the greeting " Good night " should be displayed
// In the range of hours 5-11 - the greeting " Good morning " should be displayed
// In the range of hours 11-17 - the greeting " Good day " should be displayed
// In the range of hours 17-23 - the greeting " Good evening " should be displayed.

const date = new Date();
const time = date.getHours();

if (time >= 23 && time < 5) {
    alert("Good night");
} else if (time >= 5 && time < 11) {
    alert("Good morning");
} else if (time >= 11 && time < 17) {
    alert("Good day");
} else {
    alert("Good evening");
}

// or

let greeting = time >= 23 && time < 5 ? "Good night" : time >= 5 && time < 11 ? "Good morning" : time >= 11 && time < 17 ? "Good day" : "Good evening";
alert(greeting);

// or

switch (time) {
  case time >= 23 && time < 5:
    alert("Good night");
    break;
  case time >= 5 && time < 11:
    alert("Good morning");
    break;
  case time >= 11 && time < 17:
    alert("Good day");
    break;
  default:
    alert("Good evening");
    break;
}