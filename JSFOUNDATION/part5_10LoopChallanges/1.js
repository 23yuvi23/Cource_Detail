/*
write a for loop that loops the array [green tea,black tea, chai, oolong tea] and stops the loop when it finds "chai"
store all the tea before "chai" in a new array named "selectedTeas"
*/

let tea = ["green tea","black tea", "chai", "oolong tea"]

let selectedTeas=[]

for(let i=0; i< tea.length; i++){
 
    if (tea[i]!="chai") {
        selectedTeas.push(tea[i]) 
    } else{
        break
    }
}console.log(selectedTeas)