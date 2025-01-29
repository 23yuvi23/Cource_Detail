/*
write a while loop that counts down from 5 to 1 and stores the number in an array named countdown
*/

let i = 5;
let countdown = []

while (i>0) {
    countdown.push(i)
    i--;
}
console.log(countdown)