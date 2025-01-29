const username = {
    firstName: "yuvi",
    lastName: "Paliwal",
    isLoggedin: true
};
 
console.log(username.firstName); //yuvi
console.log(username.lastName); //Paliwal

username.firstName = "Hitesh";
username.age = 30;


console.log(username)  //Hitesh
console.log(username); //{}
console.log(typeof username); //object

