function Person(name, age){
    this.name = name
    this.age = age
}

function Car (make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("toyota", "Camry")
// console.log(myCar);
let myNewCar = new Car("toy", "Cam")
// console.log(myNewCar);



function Tea (type){
    this.type=type
    this.describe=()=> `this is a cup of ${this.type}`
}

let leamonTea = new Tea ("leamon tea");
// console.log(leamonTea.describe());




function Animal (species){
    this.species = species;
}
Animal.prototype.sound = function (){
    return `${this.species} makes a sound`;
};

let dog = new Animal("dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());



//error creation with throw keyword
function Drink(name) {
    if(!new.target){
        throw new Error ("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");
let cofee = Drink ("cofee");  // used without new so we will get the error we defined 