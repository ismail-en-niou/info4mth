const question = [
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
        question: "What is the purpose of version control systems like Git in software development?",
        answers: [
            { text: "To make the code run faster", correct: false},
            { text: "To track changes in code over time", correct: true},
            { text: "To automatically fix bugs in the code", correct: false},
            { text: "To compile the code into machine language", correct: false}
        ],
        difficulty: 'medium',
        hint: "Version control systems help developers manage and track changes to their codebase."
    },
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
    {
        question: "What is the difference between 'slice' and 'splice' methods in JavaScript?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "'slice' returns a new array without modifying the original, while 'splice' modifies the original array", correct: true},
            { text: "'splice' returns a new array without modifying the original, while 'slice' modifies the original array", correct: false},
            { text: "'slice' is used for strings, while 'splice' is used for arrays", correct: false}
        ],
        difficulty: 'medium',
        hint: "Both 'slice' and 'splice' are used to manipulate arrays, but they have different behaviors and return values."
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
        question: "What is a callback function in JavaScript?",
        answers: [
            { text: "A function that calls itself", correct: false},
            { text: "A function passed as an argument to another function and executed after some operation has been completed", correct: true},
            { text: "A function that returns another function", correct: false},
            { text: "A function that handles errors", correct: false}
        ],
        difficulty: 'medium',
        hint: "Callback functions are commonly used in asynchronous programming and event handling."
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
        question: "What is the purpose of the 'setInterval()' function in JavaScript?",
        answers: [
            { text: "To pause the execution of code", correct: false},
            { text: "To repeatedly execute a function at specified intervals", correct: true},
            { text: "To measure the time between function calls", correct: false},
            { text: "To set a maximum execution time for a function", correct: false}
        ],
        difficulty: 'medium',
        hint: "The 'setInterval()' function is used to repeatedly execute a function at a fixed time interval."
    },
    {
        question: "What is event bubbling in JavaScript?",
        answers: [
            { text: "A way to create multiple events simultaneously", correct: false},
            { text: "The process where an event triggers on the innermost target element and propagates up through its ancestors", correct: true},
            { text: "A method to prevent event listeners from being triggered", correct: false},
            { text: "A technique to improve event handling performance", correct: false}
        ],
        difficulty: 'medium',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
        hint: "'localStorage' and 'sessionStorage' are both used for client-side storage in JavaScript, but they have different persistence behaviors."
    }
]

const questionsElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");
const progressBar = document.getElementById("progress");
const hintBtn = document.getElementById('hint-btn');
const difficultySelect = document.getElementById('difficulty-select');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let streak = 0;
let difficulty = 'easy';

startBtn.addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNextButton);
difficultySelect.addEventListener('change', (e) => {
    difficulty = e.target.value;
});

function startQuiz() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("usertaf");

    if (!token || !userId) {
        questionsElement.innerHTML = "Access denied. You're not logged in.";
        nextButton.innerHTML = "Go to login";
        nextButton.style.display = "block";
        nextButton.onclick = function() {
            setTimeout(() => {
                location.href = "./login.html";
            }, 6000);
        };
        return;
    }

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("fade-in");
    
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    updateStreak();
    shuffledQuestions = question.filter(q => q.difficulty === difficulty);
    shuffleArray(shuffledQuestions);
    updateProgressBar();
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;
    questionsElement.classList.add("fade-in");

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn", "fade-in");
        button.style.animationDelay = `${index * 0.1}s`;
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    if (currentQuestion.hint) {
        hintBtn.classList.remove('hidden');
        hintBtn.onclick = () => showHint(currentQuestion.hint);
    } else {
        hintBtn.classList.add('hidden');
    }

    updateProgressBar();
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        streak++;
        correctSound.play();
    } else {
        selectedBtn.classList.add("incorrect");
        streak = 0;
        incorrectSound.play();
    }
    updateStreak();
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("usertaf");

    if (token && userId) {
        questionsElement.innerHTML = `
            <h2 class="fade-in">Quiz Completed!</h2>
            <p class="fade-in" style="animation-delay: 0.2s">You scored ${score} out of ${shuffledQuestions.length}!</p>
        `;
        nextButton.innerHTML = "Go to dashboard";
        nextButton.onclick = function() {
            location.href = "./dashboard.html";
        };
        sendScore();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        questionsElement.innerHTML = "Access denied. You're not logged in.";
        nextButton.innerHTML = "Go to login";
        nextButton.onclick = function() {
            setTimeout(() => {
                location.href = "./login.html";
            }, 6000);
        };
    }

    nextButton.style.display = "block";
    nextButton.classList.add("fade-in");
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sendScore() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("usertaf");
    if (!token || !userId) {
        console.error("User token or ID not found in localStorage");
        return;
    }

    const scoreData = {
        userId: userId,
        score: score,
        totalQuestions: shuffledQuestions.length
    };

    console.log("Sending score data:", scoreData);

    fetch('https://quizz-js.onrender.com/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            userId: userId,
            score: score,
            token: token
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Failed to submit score: ${response.status} ${response.statusText}\n${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Score sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending score:', error);
        if (error.message.includes('Invalid token')) {
            console.log('Token is invalid. Please log in again.');
            // You might want to redirect to login page or refresh the token here
        }
    });
}

function updateStreak() {
    document.getElementById('streak').textContent = streak;
}

function showHint(hint) {
    alert(hint);
    hintBtn.disabled = true;
}

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startBtn.style.display = "block";
    createParticles();
});

// Modify the createParticles function
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
        particlesContainer.appendChild(particle);
    }
}

