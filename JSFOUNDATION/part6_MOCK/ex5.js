/**
 Higher-Order Functions and Arrow Functions
All the following tasks must be strictly be writtern in arrow functions only.

Task 1: Using Array Methods
Write a function squareNumbers(arr) using map() and arrow functions

Task 2: Custom Filter Function
Create a function filterEvenNumbers(arr) using filter() and arrow functions

Task 3: Sum of Positive Numbers
Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

Task 4: Transform Array of Objects
Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

Task 5: Find the Longest Word
Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
 */

//task1
const squareNumbers =(arr) => {
    return arr.map(item => item* item)

};
// console.log(squareNumbers([1,2,3,4]))

//task2
const filterEvenNumbers = (arr) => {
    return arr.filter(item => item % 2 == 0)
}
// console.log(filterEvenNumbers([1,2,3,4,5,6,7,8]))

//task3
const sumPositiveNumbers = [1,2,3,4,5,6,-10]
const newNum = sumPositiveNumbers.filter( (num)=>  num > 0) 
                                 .reduce( (acc,curr)=>acc+curr ,0)
// console.log(newNum)

//task4
const getNames = (arr) => {
    return arr.map((obj)=>obj.name);
};
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];

// console.log(getNames(people))


//task5
const findLongestWord=(arr)=>{
    return arr.reduce((longest , current) => current.length>longest.length ? current : longest, "");

}
console.log(findLongestWord(["Alice","Bob","Charlie"]))
