/*
write a for loop that loops through the array ["London","New York","Paris","Berlin"] 
and skips "Paris".
store the other cities in a new array named "visitedCities".
*/

let array = ["London","New York","Paris","Berlin"]
let visitedCities=[]

for(let i=0; i<array.length; i++){
    if(array[i]==="Paris"){
        continue;
    }

    visitedCities.push(array[i])
}
console.log(visitedCities)

