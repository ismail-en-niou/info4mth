const question = [
    // Easy questions (10)
    {
        question: "How can you change the text content of an HTML element using JavaScript and the DOM?",
        answers: [ 
            { text: "element.innerHTML = 'New text'", correct: false},
            { text: "element.textContent = 'New text'", correct: false},
            { text: "element.innerText = 'New text'", correct: false},
            { text: "All of the above.", correct: true}
        ],
        difficulty: 'easy',
        hint: "Think about different properties that can modify text content."
    },
    {
        question: "What does API stand for in computer programming?",
        answers: [
            { text: "Advanced Programming Interface", correct: false},
            { text: "Application Programming Interface", correct: true},
            { text: "Automated Program Integration", correct: false},
            { text: "Advanced Program Integration", correct: false}
        ],
        difficulty: 'easy',
        hint: "API stands for Application Programming Interface."
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'===' compares both value and type, while '==' only compares value", correct: true},
            { text: "'==' compares both value and type, while '===' only compares value", correct: false},
            { text: "'===' is used for strings, while '==' is used for numbers", correct: false}
        ],
        difficulty: 'easy',
        hint: "The '===' operator is stricter than the '==' operator."
    },
    {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'let' has block scope, while 'var' has function scope", correct: true},
            { text: "'var' has block scope, while 'let' has function scope", correct: false},
            { text: "'let' is used for numbers, while 'var' is used for strings", correct: false}
        ],
        difficulty: 'easy',
        hint: "'let' and 'var' are both used to declare variables, but they have different scoping rules."
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'null' is an assigned value representing no value or no object, while 'undefined' means a variable has been declared but not defined", correct: true},
            { text: "'undefined' is an assigned value, while 'null' means a variable has not been declared", correct: false},
            { text: "'null' is used for numbers, while 'undefined' is used for strings", correct: false}
        ],
        difficulty: 'easy',
        hint: "'null' and 'undefined' are used to represent the absence of a value in different contexts."
    },
    {
        question: "What is the difference between 'forEach' and 'map' in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'forEach' doesn't return anything, while 'map' returns a new array", correct: true},
            { text: "'map' doesn't return anything, while 'forEach' returns a new array", correct: false},
            { text: "'forEach' is faster than 'map'", correct: false}
        ],
        difficulty: 'easy',
        hint: "'forEach' and 'map' are both used to iterate over arrays, but they have different return values."
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        answers: [
            { text: "To parse a JSON string", correct: false},
            { text: "To convert a JavaScript object or value to a JSON string", correct: true},
            { text: "To validate JSON data", correct: false},
            { text: "To create a new JSON object", correct: false}
        ],
        difficulty: 'easy',
        hint: "The 'JSON.stringify()' method is used to convert JavaScript objects into JSON strings."
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method in JavaScript?",
        answers: [
            { text: "To convert a JavaScript object to a JSON string", correct: false},
            { text: "To parse a JSON string and construct the JavaScript value or object described by the string", correct: true},
            { text: "To validate JSON data", correct: false},
            { text: "To create a new JSON object", correct: false}
        ],
        difficulty: 'easy',
        hint: "The 'JSON.parse()' method is used to convert JSON strings into JavaScript objects."
    },
    {
        question: "What is the purpose of the 'setTimeout()' function in JavaScript?",
        answers: [
            { text: "To pause the execution of code", correct: false},
            { text: "To schedule a function to be executed after a specified delay", correct: true},
            { text: "To measure the time taken by a function to execute", correct: false},
            { text: "To set a maximum execution time for a function", correct: false}
        ],
        difficulty: 'easy',
        hint: "The 'setTimeout()' function is used to delay the execution of a function."
    },
    {
        question: "What is the purpose of version control systems like Git in software development?",
        answers: [
            { text: "To make the code run faster", correct: false},
            { text: "To track changes in code over time", correct: true},
            { text: "To automatically fix bugs in the code", correct: false},
            { text: "To compile the code into machine language", correct: false}
        ],
        difficulty: 'easy',
        hint: "Version control systems help developers manage and track changes to their codebase."
    },
    // Medium questions (10)
    {
        question: "In object-oriented programming, what is encapsulation?",
        answers: [
            { text: "The process of creating multiple instances of a class", correct: false},
            { text: "The ability of a class to inherit properties from another class", correct: false},
            { text: "The bundling of data and the methods that operate on that data within a single unit", correct: true},
            { text: "The process of converting code into machine language", correct: false}
        ],
        difficulty: 'medium',
        hint: "Encapsulation is a fundamental concept in object-oriented programming."
    },
    {
        question: "What is the primary purpose of a constructor in object-oriented programming?",
        answers: [
            { text: "To destroy objects", correct: false},
            { text: "To initialize object properties", correct: true},
            { text: "To define class methods", correct: false},
            { text: "To create class variables", correct: false}
        ],
        difficulty: 'medium',
        hint: "A constructor is a special method used to initialize objects."
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "To create a new object", correct: false},
            { text: "To refer to the current function", correct: false},
            { text: "To refer to the current object", correct: true},
            { text: "To create a new variable", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'this' keyword refers to the object that is executing the current function."
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
        answers: [
            { text: "To create synchronous code", correct: false},
            { text: "To handle promises more easily and write asynchronous code that looks synchronous", correct: true},
            { text: "To make the code run faster", correct: false},
            { text: "To create multi-threaded applications", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'async' and 'await' keywords are used to work with promises in JavaScript."
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: [
            { text: "To make the code run faster", correct: false},
            { text: "To enable new features of JavaScript", correct: false},
            { text: "To enforce stricter parsing and error handling", correct: true},
            { text: "To disable certain JavaScript features", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'use strict' directive helps catch common coding mistakes and unsafe actions."
    },
    {
        question: "What is the purpose of the 'map' function in JavaScript?",
        answers: [
            { text: "To create a new map object", correct: false},
            { text: "To iterate over an array and create a new array with the results of calling a provided function on every element", correct: true},
            { text: "To find the geographical coordinates of an address", correct: false},
            { text: "To sort an array", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'map' function is a higher-order function that transforms an array."
    },
    {
        question: "What is a promise in JavaScript?",
        answers: [
            { text: "A guarantee that a function will execute successfully", correct: false},
            { text: "An object representing the eventual completion or failure of an asynchronous operation", correct: true},
            { text: "A way to make synchronous code asynchronous", correct: false},
            { text: "A method to improve code performance", correct: false}
        ],
        difficulty: 'medium',
        hint: "Promises are used to handle asynchronous operations in JavaScript."
    },
    {
        question: "What is the purpose of the 'bind' method in JavaScript?",
        answers: [
            { text: "To join two arrays", correct: false},
            { text: "To create a new function with a fixed 'this' value", correct: true},
            { text: "To bind event listeners to DOM elements", correct: false},
            { text: "To bind two objects together", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'bind' method is used to create a new function that, when called, has its 'this' keyword set to a specific value."
    },
    {
        question: "What is the difference between 'call' and 'apply' methods in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'call' accepts an argument list, while 'apply' accepts a single array of arguments", correct: true},
            { text: "'apply' accepts an argument list, while 'call' accepts a single array of arguments", correct: false},
            { text: "'call' is used for functions, while 'apply' is used for methods", correct: false}
        ],
        difficulty: 'medium',
        hint: "Both 'call' and 'apply' are used to invoke a function with a given 'this' value, but they handle arguments differently."
    },
    {
        question: "What is the purpose of the 'prototype' property in JavaScript?",
        answers: [
            { text: "To create private variables", correct: false},
            { text: "To add properties and methods to object constructors", correct: true},
            { text: "To define the data type of a variable", correct: false},
            { text: "To create a copy of an object", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'prototype' property is used to add methods and properties to object constructors in JavaScript."
    },
    // Hard questions (10)
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A way to close the browser window", correct: false},
            { text: "A function with access to variables in its outer lexical scope", correct: true},
            { text: "A method to end a loop", correct: false},
            { text: "A way to close a database connection", correct: false}
        ],
        difficulty: 'hard',
        hint: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope."
    },
    {
        question: "What is the purpose of the 'reduce' function in JavaScript?",
        answers: [
            { text: "To decrease the size of an array", correct: false},
            { text: "To execute a reducer function on each element of the array, resulting in a single output value", correct: true},
            { text: "To remove duplicate elements from an array", correct: false},
            { text: "To convert an array to a string", correct: false}
        ],
        difficulty: 'hard',
        hint: "The 'reduce' function is a powerful array method that can be used for various purposes."
    },
    {
        question: "What is event bubbling in JavaScript?",
        answers: [
            { text: "A way to create multiple events simultaneously", correct: false},
            { text: "The process where an event triggers on the innermost target element and propagates up through its ancestors", correct: true},
            { text: "A method to prevent event listeners from being triggered", correct: false},
            { text: "A technique to improve event handling performance", correct: false}
        ],
        difficulty: 'hard',
        hint: "Event bubbling is a fundamental concept in event propagation in JavaScript."
    },
    {
        question: "What is the purpose of the 'preventDefault()' method in JavaScript?",
        answers: [
            { text: "To stop event propagation", correct: false},
            { text: "To prevent the default action associated with an event from occurring", correct: true},
            { text: "To remove all event listeners from an element", correct: false},
            { text: "To prevent the event from bubbling up the DOM tree", correct: false}
        ],
        difficulty: 'hard',
        hint: "The 'preventDefault()' method is used to cancel the default behavior of an event."
    },
    {
        question: "What is the purpose of the 'stopPropagation()' method in JavaScript?",
        answers: [
            { text: "To prevent the default action associated with an event", correct: false},
            { text: "To stop the event from bubbling up the DOM tree", correct: true},
            { text: "To remove all event listeners from an element", correct: false},
            { text: "To pause the execution of event handlers", correct: false}
        ],
        difficulty: 'hard',
        hint: "The 'stopPropagation()' method is used to stop event propagation in JavaScript."
    },
    {
        question: "What is the difference between 'localStorage' and 'sessionStorage' in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'localStorage' persists even after the browser window is closed, while 'sessionStorage' is cleared when the page session ends", correct: true},
            { text: "'sessionStorage' persists even after the browser window is closed, while 'localStorage' is cleared when the page session ends", correct: false},
            { text: "'localStorage' is used for storing strings, while 'sessionStorage' is used for storing objects", correct: false}
        ],
        difficulty: 'hard',
        hint: "'localStorage' and 'sessionStorage' are both used for client-side storage in JavaScript, but they have different persistence behaviors."
    },
    {
        question: "What is a generator function in JavaScript?",
        answers: [
            { text: "A function that generates random numbers", correct: false},
            { text: "A function that can be paused and resumed, yielding multiple values", correct: true},
            { text: "A function that creates other functions", correct: false},
            { text: "A function that automatically generates documentation", correct: false}
        ],
        difficulty: 'hard',
        hint: "Generator functions are special functions that can be exited and later re-entered while maintaining their context."
    },
    {
        question: "What is the purpose of the 'Symbol' data type in JavaScript?",
        answers: [
            { text: "To create unique identifiers", correct: true},
            { text: "To represent mathematical symbols", correct: false},
            { text: "To encrypt data", correct: false},
            { text: "To define constants", correct: false}
        ],
        difficulty: 'hard',
        hint: "Symbols are a unique primitive data type in JavaScript."
    },
    {
        question: "What is the purpose of the 'Proxy' object in JavaScript?",
        answers: [
            { text: "To create a new object", correct: false},
            { text: "To intercept and customize fundamental object operations", correct: true},
            { text: "To handle asynchronous operations", correct: false},
            { text: "To create a copy of an object", correct: false}
        ],
        difficulty: 'hard',
        hint: "The 'Proxy' object is used to create a wrapper for another object, allowing you to intercept and customize fundamental object operations."
    },
    {
        question: "What is the purpose of the 'Reflect' object in JavaScript?",
        answers: [
            { text: "To create a new object", correct: false},
            { text: "To intercept and customize fundamental object operations", correct: false},
            { text: "To handle asynchronous operations", correct: false},
            { text: "To provide methods for interceptable JavaScript operations", correct: true}
        ],
        difficulty: 'hard',
        hint: "The 'Reflect' object provides methods for interceptable JavaScript operations, making it easier to work with objects and proxies."
    },
    {
        question: "What is the purpose of the 'Intl' object in JavaScript?",
        answers: [
            { text: "To create a new object", correct: false},
            { text: "To intercept and customize fundamental object operations", correct: false},
            { text: "To handle asynchronous operations", correct: false},
            { text: "To provide language sensitive string comparison, number formatting, and date/time formatting", correct: true}
        ],
        difficulty: 'hard',
        hint: "The 'Intl' object provides language sensitive string comparison, number formatting, and date/time formatting capabilities in JavaScript."
    }
];

export { question };