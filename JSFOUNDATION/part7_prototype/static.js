class Calculator{
    static add(a,b){
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));  //will get error bec we have used add with static so only class can be able to access it not access outside the class

console.log(Calculator.add(2,3)) //class calls it directly 
