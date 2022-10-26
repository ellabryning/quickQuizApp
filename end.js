const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

function saveHighScore (e) {
  e.preventDefault();
  console.log('clicked save');

  const score = {
    score: mostRecentScore,
    name: username.value
  };

  highScores.push(score);
  console.log(highScores);
};
