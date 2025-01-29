let computer = {cpu : 12}
let lenovo = {
    screen : "HD",
    __proto__:computer

};
let tomHardware = {
    __proto__:lenovo
}

// console.log(computer);
// console.log(`computer`,computer.__proto__); 
console.log(`lenovo`, lenovo.__proto__)  //inherit computer in lenovo
console.log(`tom`, tomHardware.__proto__) //inherit lenovo in tomHardware 


