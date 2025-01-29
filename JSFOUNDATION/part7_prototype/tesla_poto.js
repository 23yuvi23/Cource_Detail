let genericCar = {tyres:4}

let tesla = {
    driver : "AI"
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla` , tesla)                       //will show child property
console.log (`tesla`,Object.getPrototypeOf(tesla)) //will only show parent property 