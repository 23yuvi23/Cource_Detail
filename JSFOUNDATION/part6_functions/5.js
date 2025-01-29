/*
write a fxn named "createTeaMaker" that returns another funxtion. 
The returned fxn should take parameter, "teaType" and return a messag like "Mking green tea".
Store the returned function in a variable named "teaMaker" and call it with "green tea".
*/


//closure in js


function createTeaMaker(){
    return function(teaType){
        return `making ${teaType}`
    };
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea")
console.log(result);