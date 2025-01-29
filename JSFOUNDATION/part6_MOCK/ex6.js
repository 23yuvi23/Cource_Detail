/*
Nested Functions and Context

Task 1: Using this in Objects
Create an object person with a method introduce() that uses this
additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

Task 2: Function within a function
Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
*/


//task1
const person ={
    Name:"Hitesh",
    age: 19.5,

    introduce:function(){
        console.log (`Hi, my name is ${this.Name} and I am ${this.age} years old`)
    }
}
person.introduce()

//task2
function outer(){
    function inner(){
        return `inner function called`
    }

    return inner();
}
console.log(outer());