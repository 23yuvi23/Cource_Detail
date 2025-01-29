/*
use of "for-of" loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "herbal tea"
store the other teas in an array nmed preferredTea
*/

let tea =["chai","green tea","herbal tea","black tea"]
let preferredTea =[]

for (const num of tea) {
    if (num === "herbal tea"){
        continue

    }
    preferredTea.push(num)
}
console.log(preferredTea)




