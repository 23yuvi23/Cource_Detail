# DOM Manipulation 
In Dom manipukation we will learn basically two things 
1. Event Listning
2. Get the element
first we have to event listen then we move to the other part that is get the element

# There are 2 types of DOM selectors
1. Legacy DOM selection method
- `const element = document.getElementById('myId'); `
- ` const elements = document.getElementsByClassName('myClass');
`
- `const paragraphs = document.getElementsByTagName('p');
`
2. Modern DOM Selection Methods
- document.querySelector(selector)
Selects the first element that matches the CSS selector.
```Javascript
const firstParagraph = document.querySelector('p');
const specificElement = document.querySelector('#myId');
```

- document.querySelectorAll(selector)
Returns a static NodeList of all elements matching the CSS selector.
`const allParagraphs = document.querySelectorAll('p');
`

**Difference bw HTML and DOM**
- Dom -> Processed Element in document tree in memory
- HTML -> Markup Language

 ---
# Example 1: Accessing DOM Elements

``` Javascript
<section id="example-1">
      <h2>Accessing DOM Elements</h2>
      <p id="myParagraph">
        This is a paragraph. Click the button to change me!
      </p>
      <button id="changeTextButton">Change Text</button>
    </section>
```
- [x] so we want here that when we click the **button** Change Text it will change the text from  **This is a paragraph. Click the button to change me!** to **The text has been changed**

> we have to put some things in mind before we move to the steps to do this 
- Change should happen only on click event
- And also only when we press the particular button no where else 

**Step-1- Grab the Event first By getting reference of the buton**
```Javascript
document.getElementById("changeTextButton")
.addEventListener('click' , function (){
    document.getElementById("")
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "The text has been changed"
})
```
---
# Example 2- Traversing the DOM
```Javascript
<section id="example-2">
      <h2 >Traversing the DOM</h2>
      <ul id="citiesList">
        <li class="chai">New York</li>
        <li>Tokyo</li>
        <li>Paris</li>
        <li>London</li>
      </ul>
      <button id="highlightFirstCity">Highlight First City</button>
    </section>
```
- [x] so we want here that when we click the **button** then the first city Should get highlight and also we have **.highlight** class predefined on style Tag
```css
.highlight {
        background-color: yellow;
        font-weight: bold;
        color: #1a1a1a;
      }
```
**Step-1- Grab the Parent then its child then add method so that the first list on class gets highlighted**

```Javascript
document
.getElementById("highlightFirstCity")
.addEventListener('click',function(){
    let citiesList = document.getElementById("citiesList"); //access the parent here
    citiesList.firstElementChild.classList.add("highlight");  //will give access to first child and its classes
})
```
---
# Example 3: Manipulating DOM Elements
```Javascript
    <section id="example-3">
      <h2>Manipulating DOM Elements</h2>
      <div id="coffeeOrder">Order: <span id="coffeeType">Latte</span></div>
      <button id="changeOrder">Change Order to Espresso</button>
    </section>
```
- [x] so we want here that when we click the **button** then the order should get changed from **Order:Latte** to **Order:Espresso**

```Javascript
document
.getElementById("changeOrder")
.addEventListener('click',function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso"
    //can create own css as well 
    coffeeType.style.backgroundColor = "brown"
    coffeeType.style.padding = "5px"
})
```
---

#  Example 4: Creating and Inserting Elements
```Javascript
  <section id="example-4">
      <h2>Creating and Inserting Elements</h2>
      <button id="addNewItem">Add a New Item to the Shopping List</button>
      <ul id="shoppingList">
        <li>Bread</li>
        <li>Milk</li>
      </ul>
    </section>

```
- [x] so we want here that when we click the **button** then the new item should be added to the shopping list  

```Javascript
document
.getElementById("addNewItem")
.addEventListener('click', function(){
    let NewItem = document.createElement('li')
    NewItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(NewItem)
})
```
---
#  Example 5: Removing DOM Elements
```Javascript
    <section id="example-5">
      <h2>Removing DOM Elements</h2>
      <ul id="taskList">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      <button id="removeLastTask">Remove Last Task</button>
    </section>

```
- [x] so we want here that when we click the **button** then one task from the 3 should get deleted 

```Javascript
document
.getElementById("removeLastTask")
.addEventListener('click',function(){
    let tasklist = document.getElementById("taskList");
    tasklist.lastElementChild.remove();
})
```
---

#  Example 6: Event Handling in the DOM
```Javascript
    <section id="example-6">
      <h2>Event Handling in the DOM</h2>
      <button id="clickMeButton">Click Me!</button>
    </section>
```
- [x] so we want here that when we click,hover or any other event with  the **button** then simply trigger any event like alert or anything else its up to you

```Javascript
document.getElementById("clickMeButton")
.addEventListener("click", function(){
    alert("Hello Dont Click Me!!!")
})

//mouse over event
document.getElementById("clickMeButton")
.addEventListener("mouseover", function(){
    alert("Hello Dont Click Me!!!")
})

//doubleclickevent
document.getElementById("clickMeButton")
.addEventListener("dblclick", function(){
    alert("Hello Dont Click Me!!!")
})

//more can be read on docs MDN itself
```
---
#  Example 7: Event Delegation
Event delegation is a technique where you add a single event listener to a parent element to handle events on its child elements using event bubbling.

```Javascript
<section id="example-7">
      <h2>Event Delegation</h2>
      <ul id="teaList">
        <li class="teaItem">Green Tea</li>
        <li class="teaItem">Black Tea</li>
        <li class="teaItem">Oolong Tea</li>
      </ul>
      <p>Click on any tea to select it!</p>
    </section>


```
- [x] so we want here that when we click the any elven like GREEN tea or any other then it simply gets selected


check the event which even is going on 

```Javascript
document
.getElementById("teaList")
.addEventListener('click',function(event){
    console.log("event")
    //now as you click on any item like green tea it will show event name like pointer event on the consolelog
    //it will give target there 
    //then this way we will match the caase as shown in below code 
})
```
**Code Part Here Below**
```Javascript
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
```
---
#  Example 8: Form Handling

```Javascript
    <section id="example-8">
      <h2>Form Handling</h2>
      <form action ="" id="feedbackForm">
        <label for="feedbackInput">Your Feedback:</label>
        <input type="text" id="feedbackInput" placeholder="Enter feedback" />
        <button type="submit">Submit Feedback</button>
      </form>
      <p id="feedbackDisplay"></p>
    </section>

```
- [x] So here we will learn how to handle form like as we write something inside **Enter Feedback** then we click on **submit feedback** then the feedback should be recorded inside the **Paragraph** tag 

## steps are here 
- grab the feedback form with id **"feedbackForm"**
- then add **.addEventListener('submit')** and also add **Function** 
- for seeing the change in **URL** go in html file and add **action=""** this will simply submit it on the action you define to it 
- prevent the default behaviour of form so that reloading it nor lost its data do it by **"event.preventDefault"** 
- now we need to grab the input "feedback input " and also the value of it 


```Javascript
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
```

---
#  Example 9: DOM Content Loaded (DOM status)
```Javascript
   <section id="example-9">
      <h2>DOM Content Loaded</h2>
      <p id="domStatus">Waiting for DOM to load...</p>
    </section>
```
- [x] here we simply change the message **"Waiting for DOM to load..."**
to **"DOM fully loaded"**

```Javascript
document
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent = 
    "DOM fully loaded"
})
```
---
#  Example 10: CSS Classes Manipulation
```Javascript
 <section id="example-10">
      <h2>CSS Classes Manipulation</h2>
      <p id="descriptionText">This text will change color!</p>
      <button id="toggleHighlight">Toggle Highlight</button>
    </section>
```
- [x] so here as we simply click on the button **"Toggle Highlight"** this will simply equip and unequip the bgc of that area with the simple property **".toggle"**

```Javascript
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
```

---
---