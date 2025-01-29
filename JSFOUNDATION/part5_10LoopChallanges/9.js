/*
write a "for " loop that iterates through the array [2,5,7,9].
skip the value "7" and multiply the rest by 2 .
store the result in a new array named "doubledNumbers".
*/

let num1=[2,5,7,9]
let doubledNumbers = []

for(let i=0; i<num1.length;i++){
    if(num1[i]==7){
        continue
    }
    doubledNumbers.push(num1[i] * 2)
}
console.log(doubledNumbers)