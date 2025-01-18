/*
Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

    
function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
  }
// console.log(filterNumbers([1,2,"hello"]))


// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array


function reverseArray (arr){
    return arr.reverse();
}
// console.log(reverseArray([1,2,3,4,5]))


// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr){
    return Math.max(...arr);
}
// console.log(findMax([1,3,6,2,4,9,1]))



// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr){
    return [...new Set(arr)]
}
// console.log(removeDuplicates([1,2,5,3,1,4,2,3,2,1]))


// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array


function flattenArray(arr) {
    return arr.flat(Infinity); // Flatten to any depth
}
console.log(flattenArray([1, [2, [3, 4]], 5])); 

