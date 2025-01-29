let parent = {
    greet: function() {
        console.log("Hello from parent!");
    }
};

let child = {
    sayName: function() {
        console.log("I am the child.");
    }
};

// Set parent as the prototype of child
Object.setPrototypeOf(child, parent);

// Now child can access parent properties
child.greet(); // Output: Hello from parent!
child.sayName(); // Output: I am the child.
