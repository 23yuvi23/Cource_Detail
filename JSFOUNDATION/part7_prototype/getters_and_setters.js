class Employee{

    #salary;
    constructor(name, salary){
        if (salary < 0) {
            throw new Error("salary cant be in negative")
            
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `you are not allowed to see salary`;
    }

    set salary(value){
        if (value<0) {
            console.error("Invalid salary")
            
        }else {
            this._salary = value
        }

    }
}
let employee = new Employee("Alice" , -50000);
console.log(employee._salary);
// console.log(employee.name);
// employee.salary = 5000
