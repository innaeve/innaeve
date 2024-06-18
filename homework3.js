// 1. We have the array with elements [2, 3, 4, 5]. Use the loop “for” to find the product of the elements of this array. 
// Also implement tasks through “while” loop.

const arr = [2, 3, 4, 5];

let product = 1;
for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}
alert(product);

let i = 0;
let prod = 1;
while (i < arr.length) {
    prod *= arr[i];
    i++;
}
alert(prod);

// 2. Write JavaScript “for” loop that will iterate from 0 to 15. 
// For each iteration, it will check whether the current number is even or odd and display a message on the screen.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even"

for (let ind = 0; ind < 16; ind++){
    if (ind % 2 === 0) {
        alert(`${ind} is even`);        
    } else {
        alert(`${ind} is odd`);
    }  
}

// 3. Write a function randArray(k) that will fill an array of k random integers. Random numbers are generated from the range 1-500.
// Sample Output:
// randArray(5); // [399, 310, 232, 379, 40]

function randArray(k) {
    let newArray = [];
    for (let i = 0; i < k; i++) { 
        newArray.push(Math.floor(Math.random() * 500) + 1);
    }
    alert(newArray);
}
randArray(5);
randArray(8);
randArray(19);

// 4. Write the function raiseToDegree(a, b), which returns the result of raising the number a to the power of b. 
// The function works only with integers. Implement the interface for entering numbers a, b from the keyboard.
// Sample Output:
// raiseToDegree(3, 4); // 81

function raiseToDegree() {
    const a = prompt("Enter an integer number");
    const b = prompt("Enter a power number");
    if (a >= 0 && b >= 1) {
        alert(Math.pow(a, b));
    } else {
        alert("You've entered incorrect data!")
    }
}
raiseToDegree();

// 5. Implement the findMin() function, which should accept an arbitrary number of numeric arguments and return the one with the smallest value.
// Tip: you can use the special arguments array for the solution.
// Sample Output:
// findMin (12, 14, 4, -4, 0.2); // => - 4

function findMin() {
    let myArray = (arguments);
    let result = Math.min(...myArray);
    alert(result);
}
findMin(3,2,6,7)

// 6. Write the function findUnique(arr), which accepts an array “arr” and checks if all elements of array are unique (no doubles), 
// then function will return true if all elements are unique, otherwise - false.
// Sample Output:
// findUnique ([1, 2, 3, 5, 3]); // => false
// findUnique ([1, 2, 3, 5, 11 ]); // => true

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            return false;
        }
    }
    return true;
}
alert(findUnique([1,3,2,6]));
alert(findUnique([1,3,2,2]));

// 7. Write a function that returns the last element of an array. The function can accept 2 parameters: 
// the 1st array, the 2nd numerical parameter corresponding to the number of "x" of the last elements of the array to be output.
// Sample Output:
// console.log(lastElem([3, 4, 10, -5])); // -5 
// console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5] 
// console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

function lastElem(arr, x = 1) {
    return arr.slice(-x);
}
alert(lastElem([1, 2, 3], 2));
alert(lastElem([1, 2, 3], 5));

// 8. Write a function that takes a string as an argument and converts the first letter of each word of the string to uppercase.
// Input string : 'i love java script'
// Output string: 'I Love Java Script'

const mySentence = "i love java script";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
alert(words.join(" "));