//example 1
document.getElementById("changeTextButton")
.addEventListener('click' , function (){
    document.getElementById("")
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "The text has been changed"
})

//Example 2: Traversing the DOM
document
.getElementById("highlightFirstCity")
.addEventListener('click',function(){
    let citiesList = document.getElementById("citiesList"); //access the parent here
    citiesList.firstElementChild.classList.add("highlight");  //will give access to first child and its classes

})

//Example 3: Manipulating DOM Elements
document
.getElementById("changeOrder")
.addEventListener('click',function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso"
    //can create own css as well 
    coffeeType.style.backgroundColor = "brown"
    coffeeType.style.padding = "5px"
})

// Example 4: Creating and Inserting Elements
document
.getElementById("addNewItem")
.addEventListener('click', function(){
    let NewItem = document.createElement('li')
    NewItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(NewItem)
})

//Example 5: Removing DOM Elements
document
.getElementById("removeLastTask")
.addEventListener('click',function(){
    let tasklist = document.getElementById("taskList");
    tasklist.lastElementChild.remove();
})

//Example 6: Event Handling in the DOM

// document.getElementById("clickMeButton")
// .addEventListener("click", function(){
//     alert("Hello Dont Click Me!!!")
// })

//mouseoverevent

// document.getElementById("clickMeButton")
// .addEventListener("mouseover", function(){
//     alert("Hello Dont Click Me!!!")
// })

//doubleclickevent

document.getElementById("clickMeButton")
.addEventListener("dblclick", function(){
    alert("Hello Dont Click Me!!!")
})

// Example 7: Event Delegation
document
.getElementById("teaList")
.addEventListener('click',function(event){
    if(event.target && event.target.matches(".teaItem"))
    // && event.target.matches(".teaItem") this part is not necessary
    //code will work without it also but it is necessary here to show
    //if we have multiple cases then how to select the one we needed 
        //. is for class # is for id selectors
        {
            alert("You selected: "+ event.target.textContent)
    }
})

//Example 8: Form Handling
document
.getElementById("feedbackForm")
.addEventListener('submit', function(event){
    event.preventDefault();
    let feedback  = document.getElementById("feedbackInput").value
    console.log("feedback")
    document
    .getElementById("feedbackDisplay")
    .textContent=`Feedback is ${feedback}`
    
})

//Example 9: DOM Content Loaded
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent = 
    "DOM fully loaded"
})

//Example 10: CSS Classes Manipulation
document
.getElementById("toggleHighlight")
.addEventListener('click' , function(){
    let descriptionText = document.getElementById("descriptionText");
    //this line will add color

    // descriptionText.classList.add('highlight');

    //now again click on it should remove the effect or color or CSS
    //just add toggle to get that effect simply add ".toggle to it"
    descriptionText.classList.toggle("highlight");

})
