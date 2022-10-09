const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['jury', 'asses'],
    correct: 2,
  },
  {
    quiz: ['close', 'near', 'next'],
    options: ['trace', 'adjacent'],
    correct: 2,
  },
  {
    quiz: ['foreign', 'national', 'ethnic'],
    options: ['mad', 'exotic'],
    correct: 2,
  },
  {
    quiz: ['assume', 'insight', 'weather'],
    options: ['forecast', 'sustainable'],
    correct: 1,
  },
  {
    quiz: ['fast', 'quick', 'prompt'],
    options: ['charity', 'rapid'],
    correct: 2,
  },
];

let score = 0;
scoreDisplay.textContent = score;
let clicked = [];

function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');

    const logoDisplay = document.createElement('h1');
    logoDisplay.textContent = '✒';
    questionBox.append(logoDisplay);

    question.quiz.forEach((tip) => {
      const tipText = document.createElement('p');
      tipText.textContent = tip;
      questionBox.append(tipText);
    });

    const questionButtons = document.createElement('div');
    questionButtons.classList.add('question-buttons');
    questionBox.append(questionButtons);

    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button');
      questionButton.classList.add('question-button');
      questionButton.textContent = option;
      questionButtons.append(questionButton);
      questionButton.addEventListener('click', () =>
        checkAnswer(
          questionButton,
          answerDisplay,
          option,
          optionIndex + 1,
          question.correct
        )
      );
    });

    const answerDisplay = document.createElement('div');
    answerDisplay.classList.add('answer-display');
    questionBox.append(answerDisplay);
    questionDisplay.append(questionBox);
  });
}

function checkAnswer(
  questionButton,
  answerDisplay,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(answerDisplay, 'Correct...!', 'correct');
  } else {
    score--;
    scoreDisplay.textContent = score;
    addResult(answerDisplay, 'Incorrect...!', 'wrong');
  }

  clicked.push(option);
  questionButton.disabled = clicked.includes(option);
}

function addResult(answerDisplay, answer, answerType) {
  answerDisplay.textContent = '';
  answerDisplay.textContent = answer;
  answerDisplay.classList.add(answerType);
}

populateQuestions();
