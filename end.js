

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = getElementById('finalScore');

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

function saveHighScore (e) {
  e.preventDefault();
  console.log('clicked save');
};
