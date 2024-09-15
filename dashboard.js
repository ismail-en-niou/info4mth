document.addEventListener('DOMContentLoaded', function() {
    const userScoresBody = document.getElementById('userScoresBody');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const loader = document.getElementById('loader');
    let allUserData = [];

    async function fetchUserScores() {
        try {
            loader.style.display = 'block';
            const token = localStorage.getItem('token');
            if (token) {
                console.log('Token found:', token); // Keep this for debugging
                const response = await fetch('https://quizz-js.onrender.com/users-with-scores', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });  
                if (response.ok) {
                    const data = await response.json();
                    allUserData = data;
                    console.log(data);
                    displayUserScores(allUserData);
                } else if (response.status === 404) {
                    showError('No users found');
                } else {
                    const errorText = await response.text();
                    console.error('Server response:', errorText);
                    throw new Error('Failed to fetch user data');
                }
            } else {
                showPlayWithoutLogin();
            }
        } catch (error) {
            console.error('Error:', error);
            showError(error.message || 'Failed to fetch user data');
        } finally {
            loader.style.display = 'none';
        }
    }

    function displayUserScores(users) {
        userScoresBody.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            
            const cells = [
                { label: 'Name', value: user.name },
                { label: 'Email', value: user.email },
                { label: 'Scores', value: user.scores.map(s => s.score).join(', ') },
                { label: 'Average Score', value: calculateAverage(user.scores) }
            ];

            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.value;
                td.setAttribute('data-label', cell.label);
                row.appendChild(td);
            });
            
            userScoresBody.appendChild(row);
        });
    }

    function calculateAverage(scores) {
        if (scores.length === 0) return 'N/A';
        const sum = scores.reduce((acc, score) => acc + score.score, 0);
        return (sum / scores.length).toFixed(2);
    }

    function showError(message) {
        userScoresBody.innerHTML = `<tr><td colspan="4">${message}</td></tr>`;
    }

    function filterUsers(searchTerm) {
        const filteredUsers = allUserData.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayUserScores(filteredUsers);
    }

    searchBtn.addEventListener('click', () => {
        filterUsers(searchInput.value);
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterUsers(searchInput.value);
        }
    });

    refreshBtn.addEventListener('click', fetchUserScores);

    // Initial load of all users' scores
    fetchUserScores();
});

function showPlayWithoutLogin() {
    userScoresBody.innerHTML = `
        <tr>
            <td colspan="4">
                <p>You are not logged in. You can still play the game, but your scores won't be saved.</p>
                <button id="playWithoutLoginBtn">login first</button>
            </td>
        </tr>
    `;
    document.getElementById('playWithoutLoginBtn').addEventListener('click', startGameWithoutLogin);
}

function startGameWithoutLogin() {
    // Redirect to the game page or start the game logic here
    window.location.href = 'login.html';  // Adjust this to your game page URL
}