/*
use the for-of loop to iterate through the array [1,2,3,4,5] and stop 
when the number "4" is found.
store the numbers before "4" in and array named "smallNumbers".
*/

let numbers =[1,2,3,4,5]
let smallNumbers = []

for (const num of numbers){
    if(num === 4){
        break;
    }
    smallNumbers.push(num)
} 
console.log (smallNumbers)