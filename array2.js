// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

// 1. write function ==> function will take array as input
// 2. sort the numbers inside the array and return sorted array

function sortedArray(array) {
    return array.sort((a, b) => a - b);
}

console.log(sortedArray([5, 7, 10, -10, 56]));

// Exercise 1

// Create a function that will display the smallest value in the array.

// Example:

// function findSmallest(arr) {
//   let smalest =  arr[0]
//   for (let i =0; i < arr.length; i++)
//     smalest > arr[i]
// smalest = arr[i]
// return smalest
// }

// console.log(findSmallest([30, 45, 60, 7]));

function findSmallest(arr) {
    return Math.min.apply(null, arr);
}

console.log(findSmallest([30, 45, 60, 7]));

// > 1

// Exercise 2

// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]

function numbersOnly(arr) {
    return arr.filter((item) => item + "" !== item);
}

console.log(numbersOnly(["text shde", 3, 7, "onUrHead", 13, "dying"]));

// Exercise 3

// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array

// Example:
// > console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]

function minMaxLengthAverage(arr) {
    
}

// Exercise 4

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3

// Exercise 5

// Multiply by Length
// Multiply all elements in an array by it's length

// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]

// Exercise 6

// Find the correct Index location
// Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1
