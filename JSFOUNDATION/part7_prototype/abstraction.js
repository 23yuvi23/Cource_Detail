class CofeeMachine {
    start(){
        //call db
        //filter value
        return `starting the machine...`;
    }

    brewCofee(){

        //complex calculation
        return `Brewing cofee...`;
    }

    pressStartButton(){
       let msgone =  this.start()
       let msgtwo = this.brewCofee()
       return `${msgone} + ${msgtwo}`;
    }
}

let myMachine = new CofeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCofee());
console.log(myMachine.pressStartButton());
