document.addEventListener('DOMContentLoaded', function() {
    const scoreForm = document.getElementById('scoreForm');
    const scoresList = document.getElementById('scoresList');
    const allUsersScoresList = document.getElementById('allUsersScoresList');
    
    // Function to add a score
    async function addScore(userId, score) {
        try {
            const response = await fetch('https://quizz-js.onrender.com/score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, score }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                alert('Score added successfully');
                getScores(userId);
            } else {
                alert('Failed to add score: ' + data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    // Function to get and display scores
    async function getScores(userId) {
        try {
            const response = await fetch(`https://quizz-js.onrender.com/${userId}`);
            const data = await response.json();
            
            if (response.ok) {
                scoresList.innerHTML = '';
                Object.values(data).forEach(score => {
                    const li = document.createElement('li');
                    li.textContent = `Score: ${score.score}, Date: ${new Date(score.timestamp).toLocaleString()}`;
                    scoresList.appendChild(li);
                });
            } else {
                scoresList.innerHTML = '<li>No scores found</li>';
            }
        } catch (error) {
            console.error('Error:', error);
            scoresList.innerHTML = '<li>Failed to fetch scores</li>';
        }
    }

    // Function to get and display all users with scores
    async function getAllUsersWithScores() {
        try {
            const response = await fetch('https://quizz-js.onrender.com/users-with-scores');
            const data = await response.json();
            
            if (response.ok) {
                allUsersScoresList.innerHTML = '';
                data.forEach(user => {
                    const li = document.createElement('li');
                    const scores = user.scores.map(s => s.score).join(', ');
                    li.textContent = `User: ${user.name}, Email: ${user.email}, Scores: [${scores}]`;
                    allUsersScoresList.appendChild(li);
                });
            } else {
                allUsersScoresList.innerHTML = '<li>No users found</li>';
            }
        } catch (error) {
            console.error('Error:', error);
            allUsersScoresList.innerHTML = '<li>Failed to fetch users</li>';
        }
    }

    // Event listener for score form submission
    scoreForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        const score = document.getElementById('score').value;
        addScore(userId, parseInt(score));
    });

    // Initial load of scores
    const userId = document.getElementById('userId').value;
    if (userId) {
        getScores(userId);
    }

    // Initial load of all users' scores
    getAllUsersWithScores();
});