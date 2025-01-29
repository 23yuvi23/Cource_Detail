//number

let balance = 123;
let anotherBalance = new Number(123);
console.log(typeof balance); //number
console.log(typeof anotherBalance); //object

console.log("balance = " ,balance); //123
console.log("anotherBalance = " ,anotherBalance); //123

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null or undefined
 let firsrName;
 console.log(firsrName); //undefined
 console.log(typeof firsrName); //undefined

 let lastName = null;
console.log(lastName); //null
console.log(typeof lastName); //object

//string
let myString = "helo";
let anotherString = 'hola';
let username = "yuvi";


// way 1 of formatting string
let oldGreet = myString + " " + username;
console.log(oldGreet); //helo yuvi

// way 2 of formatting string
let newGreet = `${myString} ${username}`;
console.log(newGreet); //helo yuvi


//symbol
let sm1 = Symbol('hitesh');
let sm2 = Symbol('foo');
console.log(sm1 === sm2); //false
console.log(typeof sm1); //symbol

console.log(sm1); //Symbol(foo)