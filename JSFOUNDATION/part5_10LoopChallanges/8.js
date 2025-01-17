/*
write a "forEach" loop that iterates through the array ["Berlin" , "Tokyo","sydney","pasris"]
skip "sydney and store the other cities in a new array named "traveledCities"
*/

let cities = ["Berlin" , "Tokyo","sydney","pasris"]
let Selected =[]

//with normal function
cities.forEach(function(city){
    if(city==="sydney"){
        return
    }
    Selected.push(city)
})
console.log(Selected)



//with arrow fxn now
cities.forEach(city =>{
    if(city === "sydney"){
        return
    }
    Selected.push(city)
})
console.log(Selected)
