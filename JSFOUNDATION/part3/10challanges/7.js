/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/


//method 1
// let topCities = ["berlin","singapore","new york"]
// let hardCopyCities=[...topCities];
topCities.pop();
console.log(hardCopyCities);


let topCities = ["berlin","singapore","new york"]
//or slice method 
let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);