/*
write a for  loop that multiplies each element in array[2,3,6] by 2 amd stores the result
in a new array named "multipliesNumbers".
*/

let arr=[2,3,6]
let multipliesNumbers =[]

for (let i = 0; i < arr.length; i++) {
    multipliesNumbers.push(2*arr[i])
    
}

console.log(multipliesNumbers)