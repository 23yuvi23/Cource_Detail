let car = {
    make: "Toyota" ,
    model: "Camry",
    year:2020,

    start: function (){
        return `${this.make} car got started in ${this.year} `;
    }
}
// console.log(car.start())

function Person(name, age){
    this.name = name
    this.age = age 
}

let John = new Person("john",20);
console.log(John.age)

//prototypal chain
function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function(){
    return `Custom method ${this}`
}


let myArray = [1,2,4]
console.log(myArray.hitesh());
let NewmyArray = [1,2,4,4,5,6]
console.log(NewmyArray.hitesh());


//class creation
class Vehicle {
    constructor(make,model){    //when a fxn is declared inside a clas is called method
        this.make = make
        this.model = model
    }

    start(){                    //if it is method we dont rere function keyword in it
        return `${this.model} is a car form ${this.make}`
    }
}
// Creating an instance of the Vehicle class
// const myCar = new Vehicle('Toyota', 'Corolla');
// // Calling the start method and displaying the output
// console.log(myCar.start());

//inheritance 
class Car extends Vehicle {     //extends keyword is used to extend any class you want
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}

let myCar =  new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());


// let vehicleOne = new Vehicle("Toyota", "Corolla")
// console.log(vehicleOne.make)
