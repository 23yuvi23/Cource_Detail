/*Classes, Objects, and Inheritance
Task 1: Class Inheritance

Create a class Vehicle with properties make and model, 
and a method getDetails() that returns a string "Make: [make], Model: [model]". 
}Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
*/

class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}`;
    }

    move() {
        return 'The vehicle is moving';
      }
}

class Car extends Vehicle {
    startEngine() {
      return 'Engine started';
    }

}