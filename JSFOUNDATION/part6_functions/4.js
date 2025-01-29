/*
write a fxn named "processTeaOrder" that takes another function, "makeTea", as a parameter and calls it 
with  the argument "earl grey".
Return the result of calling "makeTea".
*/


//high order fxn

function makeTea (typeOfTea){ 
    return `maketea: ${typeOfTea}`
 }
function processTeaOrder (teafxn){
    return teafxn("earl grey")
 }
let order = processTeaOrder(makeTea)
console.log(order)