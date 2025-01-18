/*
Task:
Perform the following mathematical operations
on the provided variables a and b
Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    const result =  a+b;
    return result
}

// Subtract small value from larger one
function subtract() {
    const result = b-a;
    return result
}

function multiply() {
    const result = a*b;
    return result
}

// Divide larger value by small
function divide() {
    const result = b/a;
    return result
}

// Increase value of a by 1
function increment() {
    let result = a;
    result = ++result
    return result
}

// Decrease value of b by 1
function decrement() {
    let result = b;
    result = --result
    return result
}

// Divide larger value by small to find the reminder
function reminder() {
    const result = b%a;
    return result
}


