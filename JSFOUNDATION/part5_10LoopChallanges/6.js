/*
use a "for-in" loop to loop through object containing city populations.
skip any city with a population below 3 million and store the rest in a new object named "largeCities".

let worldCities = {
"sydney":500000,
"tokyo" :900000,
"berlin":3500000,
"paris":2200000
}
*/

let worldCities = {
    "sydney":500000,
    "tokyo" :900000,
    "berlin":3500000,
    "paris":2200000
    }

let largeCities = {}

for (const key in worldCities) {
    if(worldCities[key] < 3000000){
        continue
    }
    
    largeCities[key]=worldCities[key]
   
}
console.log(largeCities)