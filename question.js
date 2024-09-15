
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
        hint: "The 'map' function is used to transform arrays in JavaScript."
    },
    {
        question: "What is the purpose of the 'reduce' function in JavaScript?",
        answers: [
            { text: "To reduce the size of an array", correct: false},
            { text: "To apply a function against an accumulator and each element of the array (from left to right) to reduce it to a single value", correct: true},
            { text: "To remove duplicates from an array", correct: false},
            { text: "To create a new array", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'reduce' function is used to accumulate values in an array."
    },
    {
        question: "What is the purpose of the 'filter' function in JavaScript?",
        answers: [
            { text: "To filter out elements that do not pass a test implemented by a provided function", correct: true},
            { text: "To filter out null values from an array", correct: false},
            { text: "To sort an array", correct: false},
            { text: "To transform each element of an array", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'filter' function is used to create a new array with all elements that pass a test."
    },
    {
        question: "What is the purpose of the 'find' function in JavaScript?",
        answers: [
            { text: "To find an element in an array that satisfies a provided testing function", correct: true},
            { text: "To find the maximum value in an array", correct: false},
            { text: "To find the index of an element in an array", correct: false},
            { text: "To sort an array", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'find' function returns the first element that satisfies a testing function."
    },
    {
        question: "What is the purpose of the 'slice' function in JavaScript?",
        answers: [
            { text: "To slice a string into an array", correct: false},
            { text: "To remove elements from an array", correct: false},
            { text: "To return a shallow copy of a portion of an array into a new array object", correct: true},
            { text: "To transform each element of an array", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'slice' function is used to extract a section of an array."
    },
    // Hard questions (5)
   // Additional Hard Questions (10)
{
    question: "What is the time complexity of binary search in a sorted array?",
    answers: [
        { text: "O(n)", correct: false},
        { text: "O(n log n)", correct: false},
        { text: "O(log n)", correct: true},
        { text: "O(1)", correct: false}
    ],
    difficulty: 'hard',
    hint: "Binary search halves the search space with each step."
},
{
    question: "What is a 'deadlock' in the context of operating systems?",
    answers: [
        { text: "A condition where two or more processes are stuck, waiting for each other to release resources", correct: true},
        { text: "A situation where processes are terminated unexpectedly", correct: false},
        { text: "A technique to prevent processes from using shared resources", correct: false},
        { text: "A tool used to detect memory leaks in processes", correct: false}
    ],
    difficulty: 'hard',
    hint: "Deadlock is related to resource allocation and mutual waiting among processes."
},
{
    question: "What is the 'halting problem' in theoretical computer science?",
    answers: [
        { text: "The problem of determining whether a given program will terminate or run forever", correct: true},
        { text: "The issue of determining how many steps a program will take to finish", correct: false},
        { text: "A method to optimize the performance of algorithms", correct: false},
        { text: "A technique to pause a process until an event occurs", correct: false}
    ],
    difficulty: 'hard',
    hint: "The halting problem is one of the most famous undecidable problems."
},
{
    question: "What is the main difference between 'symmetric' and 'asymmetric' encryption?",
    answers: [
        { text: "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys", correct: true},
        { text: "Asymmetric encryption is faster than symmetric encryption", correct: false},
        { text: "Symmetric encryption uses multiple keys, while asymmetric uses only one key", correct: false},
        { text: "There is no difference, they are just two names for the same technique", correct: false}
    ],
    difficulty: 'hard',
    hint: "Asymmetric encryption involves a public and private key pair."
},
{
    question: "What does NP-complete mean in the context of computational complexity?",
    answers: [
        { text: "A problem that is in NP and every problem in NP can be reduced to it in polynomial time", correct: true},
        { text: "A problem that has no solution", correct: false},
        { text: "A problem that can only be solved using exponential time", correct: false},
        { text: "A problem that is unsolvable", correct: false}
    ],
    difficulty: 'hard',
    hint: "NP-complete problems are the hardest problems in NP."
},
{
    question: "In database management, what is a 'foreign key'?",
    answers: [
        { text: "A key used to uniquely identify records in a table", correct: false},
        { text: "A field in one table that refers to the primary key in another table", correct: true},
        { text: "A key used to encrypt sensitive data in the database", correct: false},
        { text: "A key used to join two tables together", correct: false}
    ],
    difficulty: 'hard',
    hint: "Foreign keys are used to maintain referential integrity between tables."
},
{
    question: "What is the purpose of the 'CAP theorem' in distributed systems?",
    answers: [
        { text: "It states that no distributed system can achieve consistency, availability, and partition tolerance simultaneously", correct: true},
        { text: "It ensures that all nodes in a distributed system are synchronized", correct: false},
        { text: "It provides a way to optimize the speed of a distributed database", correct: false},
        { text: "It guarantees that data is never lost in distributed systems", correct: false}
    ],
    difficulty: 'hard',
    hint: "CAP theorem explains the trade-offs in distributed system design."
},
{
    question: "What is a 'Turing machine'?",
    answers: [
        { text: "A theoretical machine that can simulate any algorithmic computation", correct: true},
        { text: "A machine used to break encryption codes", correct: false},
        { text: "A physical machine that solves complex math problems", correct: false},
        { text: "A machine that only works with binary code", correct: false}
    ],
    difficulty: 'hard',
    hint: "Turing machines are used to model computation and decision problems."
},
{
    question: "What is 'memoization' in computer programming?",
    answers: [
        { text: "A technique used to store the results of expensive function calls and reuse them when the same inputs occur again", correct: true},
        { text: "A way to compress data in memory for faster access", correct: false},
        { text: "A method of freeing unused memory from the system", correct: false},
        { text: "A technique used to improve sorting algorithms", correct: false}
    ],
    difficulty: 'hard',
    hint: "Memoization is a dynamic programming technique to avoid redundant computations."
},
{
    question: "What is 'quantum computing'?",
    answers: [
        { text: "A type of computing that uses qubits to perform complex calculations much faster than classical computers", correct: true},
        { text: "A form of computing that simulates parallel processing on a traditional CPU", correct: false},
        { text: "A process of using quantum numbers to store data", correct: false},
        { text: "A technique to solve problems using probability theory", correct: false}
    ],
    difficulty: 'hard',
    hint: "Quantum computers use the principles of quantum mechanics to solve certain problems more efficiently."
}
];

export { question };