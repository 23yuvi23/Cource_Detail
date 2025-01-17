/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["kyoto","london","capetown","vancouver"]

let isLondonInList = cityBucketList.includes("london")
console.log(isLondonInList);