/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["paris","rome"]
let asianCities = ["tokyo","bankok"]

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);