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
            const response = await fetch('https://quizz-js.onrender.com/users-with-scores');
            const data = await response.json();
            
            if (response.ok) {
                allUserData = data;
                displayUserScores(allUserData);
            } else {
                showError('No users found');
            }
        } catch (error) {
            console.error('Error:', error);
            showError('Failed to fetch user data');
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