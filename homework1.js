// 1. Write a script inside the HTML document that displays your name on the screen using the alert () function.

// 2. Write a script in an external file that outputs your last name to the console. Connect the created file to the HTML document.

console.log("Dogan");

// 3. a ) declare two variables;
//    b ) write any values in the variable;
//    c ) display the values of the variables on the screen;
//    d ) copy the value of one variable to another;
//    e ) display the values of the variables on the screen.

let name = "Anna";
let age = 25;
alert(name + ", " + age);

name = age;
alert(name + ", " + age);

// 4. Create an object with the following 5 properties : “ String ”, “ Number ”, “ Boolean ”, “ Undefined ”, “ Null ” . 
// The value of each property must correspond to the corresponding primitive data type.

const homeAddress = {
    street: "Jules Verne Boulevard",
    houseNumber: 100,
    houseIsBig: true,
    homePhone: undefined,
    dueDate: null
};
	
// 5. Using the confirm() function, ask the user a question about reaching the age of majority. 
// Record the result in the isAdult variable and output it to the console.

let isAdult = confirm("Are you 18+ aged?");
console.log(isAdult);

// 6. In an external file, write a script in which you declare variables to store the following data:
//  - your name is
//	- your last name
//	- study group
//	- your year of birth .
// Assign the appropriate values to the variables.
// Create and initialize a boolean variable to store your marital status.
// Determine the type of each variable.
// Display the values of the variables in the console , according to their type , in the following order : Number , Boolean , String .
// Create 2 arbitrary variables of type Null and Undefined respectively . Output their type to the console.

let myName = "Inna";
let mySurname = "Dogan";
let group = "TA w/ JS";
let yearsInSoftserve = 3;
let birthyear = undefined;
let isMarried = true;
let longLiveTheKing = null;

console.log(yearsInSoftserve);
console.log(isMarried);
console.log(myName);
console.log(mySurname);
console.log(group);
console.log(typeof longLiveTheKing);
console.log(typeof birthyear);
	
// 7. Using the prompt() function, write a script that sequentially asks the user for a login, email, and password, 
// and displays a message with the entered data on the screen. 
// For example, "Dear User, your email is usermale@gmail.com, your password is qwerty ."

let login = prompt("Type your login, please");
let email = prompt("Type your email, please");
let password = prompt("Type your password, please");
alert("Dear user, your login is " + login + ", your email is " + email + ", and your password is " + password + ".");

// 8*. Write a script that calculates the number of seconds in an hour , in a day , in a month , 
// records the results in the corresponding variables, and displays their values on the screen.

const minute = 60;
const hour = 60;
const day = 24;
const month = 30;
alert("Seconds in an hour: " + minute * hour);
alert("Seconds in a day: " + minute * hour * day);
alert("Seconds in a month: " + minute * hour * day * month);