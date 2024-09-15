import { question } from './question.js';
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
const rulesScreen = document.getElementById("rules-screen");
const startQuizBtn = document.getElementById("start-quiz-btn");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let streak = 0;
let difficulty = 'easy';
let quizStartTime;
let quizEndTime;
let quizInProgress = false;
let suspectedCheatingAttempts = 0;
const MAX_CHEATING_ATTEMPTS = 3;
const CHEATING_TIME_PENALTY = 60000; // 60 seconds in milliseconds
let isShowingHint = false;

startBtn.addEventListener("click", showRules);
startQuizBtn.addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNextButton);
difficultySelect.addEventListener('change', (e) => {
    difficulty = e.target.value;
});

function showRules() {
    startScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
}

function startQuiz() {
    console.log("Start button clicked");
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("usertaf");

    console.log("Token:", token);
    console.log("User ID:", userId);

    if (!token || !userId) {
        console.log("Access denied: User not logged in");
        questionsElement.innerHTML = "Access denied. You're not logged in.";
        nextButton.innerHTML = "Go to login";
        nextButton.style.display = "block";
        nextButton.onclick = function() {
            location.href = "./login.html";
        };
        return;
    }

    console.log("Starting quiz");
    rulesScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("fade-in");
    
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    suspectedCheatingAttempts = 0;
    updateStreak();
    console.log("Selected difficulty:", difficulty);
    if (Array.isArray(question)) {
        shuffledQuestions = question.filter(q => q.difficulty === difficulty);
    } else if (typeof question === 'object' && question !== null) {
        shuffledQuestions = Object.values(question).filter(q => q.difficulty === difficulty);
    } else {
        console.error("Error: 'question' is not an array or object");
        shuffledQuestions = [];
    }
    console.log("Filtered questions:", shuffledQuestions.length);

    if (shuffledQuestions.length === 0) {
        console.log("No questions available for selected difficulty");
        questionsElement.innerHTML = "No questions available for the selected difficulty. Please choose another difficulty.";
        return;
    }

    shuffleArray(shuffledQuestions);
    updateProgressBar();
    showQuestion();

    quizStartTime = new Date();
    quizInProgress = true;
    window.addEventListener('blur', handlePageExit);
    window.addEventListener('beforeunload', handlePageExit);

    console.log("Quiz started successfully");
}

let pageExitTimeout;

function handlePageExit(event) {
    if (quizInProgress && !isShowingHint) {
        clearTimeout(pageExitTimeout);
        pageExitTimeout = setTimeout(() => {
            suspectedCheatingAttempts++;
            score = Math.max(0, score - 42); // Deduct 42 points, but don't go below 0
            console.log(`Cheating attempt detected. Score reduced by 42 points. New score: ${score}`);
            
            showCheaterMessage();
            endQuiz();
        }, 100); // Reduced to 100ms for near-immediate detection

        event.preventDefault();
        event.returnValue = "You are a cheater! Leaving the page is not allowed during the quiz.";
    }
}

function showCheaterMessage() {
    const cheaterOverlay = document.createElement('div');
    cheaterOverlay.id = 'cheater-overlay';
    cheaterOverlay.style.position = 'fixed';
    cheaterOverlay.style.top = '0';
    cheaterOverlay.style.left = '0';
    cheaterOverlay.style.width = '100%';
    cheaterOverlay.style.height = '100%';
    cheaterOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    cheaterOverlay.style.zIndex = '9999';
    cheaterOverlay.style.display = 'flex';
    cheaterOverlay.style.justifyContent = 'center';
    cheaterOverlay.style.alignItems = 'center';
    cheaterOverlay.style.flexDirection = 'column';
    cheaterOverlay.style.color = 'white';
    cheaterOverlay.style.fontSize = '36px';
    cheaterOverlay.style.textAlign = 'center';

    const message = document.createElement('p');
    message.textContent = 'You are a cheater!';
    
    const subMessage = document.createElement('p');
    subMessage.textContent = 'Leaving the page is not allowed during the quiz.';
    subMessage.style.fontSize = '24px';
    subMessage.style.marginTop = '20px';

    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = `Your final score: ${score}`;
    scoreMessage.style.marginTop = '20px';

    const returnButton = document.createElement('button');
    returnButton.textContent = 'Return to Dashboard';
    returnButton.style.marginTop = '40px';
    returnButton.style.padding = '15px 30px';
    returnButton.style.fontSize = '20px';
    returnButton.style.cursor = 'pointer';
    returnButton.style.backgroundColor = '#FF4136';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.color = 'white';
    returnButton.onclick = () => {
        location.href = './dashboard.html';
    };

    cheaterOverlay.appendChild(message);
    cheaterOverlay.appendChild(subMessage);
    cheaterOverlay.appendChild(scoreMessage);
    cheaterOverlay.appendChild(returnButton);

    document.body.appendChild(cheaterOverlay);
}

function endQuiz() {
    quizEndTime = new Date();
    quizInProgress = false;
    window.removeEventListener('blur', handlePageExit);
    window.removeEventListener('beforeunload', handlePageExit);
    sendScore();
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
    quizEndTime = new Date();
    quizInProgress = false;
    window.removeEventListener('blur', handlePageExit);
    window.removeEventListener('beforeunload', handlePageExit);

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

    let quizDuration = (quizEndTime - quizStartTime) / 1000; // Duration in seconds
    let finalScore = score;

    // If cheating was detected, set the score to -42
    if (suspectedCheatingAttempts > 0) {
        finalScore = -42;
        console.log(`Cheating detected. Score set to ${finalScore}`);
    }

    const scoreData = {
        userId: userId,
        score: finalScore,
        totalQuestions: shuffledQuestions.length,
        quizDuration: quizDuration,
        difficulty: difficulty,
        suspectedCheatingAttempts: suspectedCheatingAttempts,
        cheatingDetected: suspectedCheatingAttempts > 0
    };

    console.log("Sending score data:", scoreData);

    fetch('https://quizz-js.onrender.com/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(scoreData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
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
    isShowingHint = true;
    alert(hint);
    hintBtn.disabled = true;
    setTimeout(() => {
        isShowingHint = false;
    }, 500); // Set a small delay to prevent false positives
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

const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

