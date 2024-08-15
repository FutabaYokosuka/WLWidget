let wins = 0;
let losses = 0;

function updateScoreboard() {
    document.getElementById('winnum').textContent = `${wins} `;
    document.getElementById('losenum').textContent = `${losses} `;
    let totalGames = wins + losses;
    let winRate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(2) : 0;
    document.getElementById('rateScore').textContent = `${winRate}`;
}

document.getElementById('winButton').addEventListener('click', function() {
    wins += 1;
    updateScoreboard();
});

document.getElementById('loseButton').addEventListener('click', function() {
    losses += 1;
    updateScoreboard();
});

document.getElementById('resetButton').addEventListener('click', function() {
    wins = 0;
    losses = 0;
    updateScoreboard();
});

updateScoreboard();
