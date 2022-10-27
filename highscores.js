const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highscores')) || [];

console.log(highScores)

