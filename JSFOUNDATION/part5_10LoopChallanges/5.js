/*

5. Use a `for-in loop to loop through an object containing city populations.
Stop the loop when the population of ""Berlin" is found and store all previous cities' populations in a new object named cityPopulations.

let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin":3500000
}

*/


let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin":3500000
    }

let cityNewPopulations = {}

for(const city in citiesPopulation){
    // key = value
    if(city === "Berlin"){
        break
    }
    cityNewPopulations[city] =citiesPopulation[city]
}
console.log(cityNewPopulations)