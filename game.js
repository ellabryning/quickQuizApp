const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressComplete = document.getElementById('progressComplete');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
const availableQuestions = [];

const questions = [
  {
    question: 'question1',
    choice1: '1',
    choice2: '2',
    choice3: '3',
    choice4: '4',
    answer: 1
  },
  {
    question: 'question2',
    choice1: '1',
    choice2: '2',
    choice3: '3',
    choice4: '4',
    answer: 2
  },
  {
    question: 'question3',
    choice1: '1',
    choice2: '2',
    choice3: '3',
    choice4: '4',
    answer: 3
  },
  {
    question: 'question4',
    choice1: '1',
    choice2: '2',
    choice3: '3',
    choice4: '4',
    answer: 4
  },
  {
    question: 'question5',
    choice1: '1',
    choice2: '2',
    choice3: '3',
    choice4: '4',
    answer: 4
  }
];

const correctBonus = 10;
const maxQuestions = 3;

function startGame () {
  questionCounter = 0;
  score = 0;
  Object.assign(availableQuestions, questions);
  getNewQuestion();
}

function getNewQuestion () {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign('/end.html');
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;
  progressComplete.style.width = `${((questionCounter / maxQuestions) * 100) - 10}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;

    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    selectedChoice.parentElement.classList.add(classToApply);

    if (classToApply === 'correct') {
      incrementScore(correctBonus);
    }

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 2000);
  });
});

function incrementScore (num) {
  score += num;
  scoreText.innerText = score;
}

startGame();
