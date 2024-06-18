// 1. Implement the calcRectangleArea(width, height) function, which takes 2 parameters, 
// the width of the rectangle width and the height of the rectangle height, and calculates its area. 
// Provide termination of program execution and generation of an exception if non-numeric parameters are passed to the function.
// Write code that uses this function and handles possible exceptions.

let width = prompt("Enter the rectangle's width");
let height = prompt("Enter the rectangle's height");

function calcRectangleArea(width, height) {
    const area = width * height;
    if (width > 0 && height > 0) {
    alert(area);
    }
}

try {
    calcRectangleArea(width, height);
    if (width > 0 && height > 0) { 
        alert("All fine!");
    } else throw new Error("Incorrect data is entered. Please enter positive numeric values for both width and height.");
} catch (exception) {
    alert(exception);
}

// 2. Write a checkAge() function that will prompt the user to enter their age and generate errors in the modal window if when: 
// 	- the user entered an empty tape (for example, "The field is empty! Please enter your age"),
// 	- a non-numeric value
// 	- the user's age is less than 14 years . 
// Otherwise, the user gets access to watching the movie.
// In the catch block, provide for the output of the name and description of the error.

class AgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeError";
    }
}

function checkAge() {
    let age = prompt("How old are you?");
    if (age >= 14) {
        alert("Enjoy the movie!")
    } else if (age === "") {
        throw new Error("The field is empty! Start again to enter your age.");
    } else if (age < 14) {
        throw new AgeError("You are still too young!");
    } else {
        throw new TypeError ("Incorrect data type is entered. Please enter positive numeric value according to your age.");
    }
}

try {
    checkAge();
} catch (except) {
    alert(except.stack);
}

// 3. Create a Month Exception class whose constructor takes a message parameter and initializes the name field to 'MonthException'.
// Implement the showMonthName(month) function, where the month parameter is the sequential number of the month of the year. 
// The function returns the name of the month according to the entered month number. In case of incorrect input, 
// an exception is thrown in the form of an object of the Month Exception class with the message 'Incorrect month number'.
// Write code that uses this function, provide handling of possible exceptions.
// An example of the program:
// > console.log(showMonthName(5));
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

class MonthException {
  constructor(message) {
    this.field = "MonthException";
    this.message = message;
  }
}

function showMonthName(month) {
    if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month - 1];
}

console.log(showMonthName(5));
console.log(showMonthName(14));

// 4. Implement the showUser(id) function, which takes the user id as a parameter and returns an object that contains the value of the passed id.
// The function also throws an error if a negative id is entered.
// Implement the showUsers(ids) function, which accepts an array of user ids as a parameter, checks each element of the ids array for correctness 
// using the showUser() function, and displays an error message in the event of an exceptional situation.
// The showUsers(ids) function returns an array of objects where the key values are the correct ids elements.
// An example of the program:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
    if (id <= 0) {
        throw new Error(`The ID ${id} is incorrect. IDs should be more than zero.`);
    } else return { id };
}

function showUsers(ids) {
    let arrayToAdd = [];
    ids.forEach(function(id) {
        try {
            let user = showUser(id);
            arrayToAdd.push(user);
        } catch (exeption) {
            console.log(exeption.message);
        }
});
console.log(arrayToAdd);
}

showUsers([8, 19, -25, 0]);