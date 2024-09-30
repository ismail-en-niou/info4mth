const gameBoard = document.querySelector('.game-board');
const movesElement = document.getElementById('moves');
const pairsElement = document.getElementById('pairs');
const startQuizButton = document.getElementById('start-quiz');

let cards = [];
let flippedCards = [];
let moves = 0;
let pairs = 0;

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

function initializeGame() {
    cards = [...emojis, ...emojis]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({
            id: index,
            content: emoji,
            isFlipped: false,
            isMatched: false
        }));

    renderCards();
    updateGameInfo();
}

function renderCards() {
    gameBoard.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`;
        cardElement.innerHTML = `
            <div class="front">?</div>
            <div class="back">${card.content}</div>
        `;
        cardElement.addEventListener('click', () => handleCardClick(card));
        gameBoard.appendChild(cardElement);
    });
}

function handleCardClick(clickedCard) {
    if (flippedCards.length === 2 || clickedCard.isMatched || clickedCard.isFlipped) return;

    clickedCard.isFlipped = true;
    flippedCards.push(clickedCard);
    moves++;

    renderCards();

    if (flippedCards.length === 2) {
        setTimeout(() => {
            if (flippedCards[0].content === flippedCards[1].content) {
                flippedCards.forEach(card => card.isMatched = true);
                pairs++;
                if (pairs === emojis.length) {
                    setTimeout(() => {
                        alert('Congratulations! You\'ve matched all pairs!');
                        startQuizButton.style.display = 'block';
                    }, 500);
                }
            } else {
                flippedCards.forEach(card => card.isFlipped = false);
            }
            flippedCards = [];
            renderCards();
            updateGameInfo();
        }, 1000);
    }

    updateGameInfo();
}

function updateGameInfo() {
    movesElement.textContent = `Moves: ${moves}`;
    pairsElement.textContent = `Pairs: ${pairs}/${emojis.length}`;
}

startQuizButton.addEventListener('click', () => {
    document.getElementById('memory-game').style.display = 'none';
    window.location.href = "quizz.html";
});

initializeGame();