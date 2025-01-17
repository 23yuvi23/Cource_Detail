/*
write a for loop that list all the cities in array ["paris","newyork","tokyo","london"] and 
store each city in a new array named "cityList"
*/

let cities =["paris","newyork","tokyo","london"]
let cityList =[]

for(let i=0;i<cities.length;i++){
    cityList.push(cities[i])
}
console.log(cityList)