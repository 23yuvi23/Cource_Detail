/* 
Loops
Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers

Task 2: Multiplication Table
Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/

//task 1
function sumOfN(n){
    
    let sum = 0;
    for(let i=0; i<=n ; i++){
        sum= sum+i
    }
    return sum
}
console.log(sumOfN(5))


//task 2
function printMultiplicationTable(n){
    let result = []
    for(let i=1; i<=10; i++){
        result.push(`${n} x ${i} =  ${n * i} `)
    }
    return result
}
console.log(printMultiplicationTable(2))

//task3
function countVowels(str){
    let vovels = "aeiouAEIOU"

    let count = 0;
    for (let char of str){
        if (vovels.includes(char)) {
            count++;
        }
    }
   
    return count;
}
console.log(countVowels("hello world"))
