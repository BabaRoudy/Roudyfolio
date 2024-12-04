const ladderSteps = document.querySelectorAll('.ladder-step');
let currentMoney = 0;

function updateMoneyLadder(money) {
  currentMoney = money;
  ladderSteps.forEach((step, index) => {
    if (index < 15 && money >= [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000][index]) {
      step.style.backgroundColor = 'green';
    } else {
      step.style.backgroundColor = 'orange';
    }
  });
  document.getElementById('money-earned').textContent = `$${currentMoney.toLocaleString()}`;
}

const gameOverSound = new Audio('assets/1M_Lose_SFX.mp3');
const gameWonSound = new Audio('assets/1M_Win_SFX.mp3');
const CorrectAnswerSound =new Audio('assets/1M_Correct.mp3');

const gameOverOverlay = document.getElementById('game-over-overlay');
const gameWonOverlay = document.getElementById('game-won-overlay');





function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    switch (currentQuestionIndex) {
      case 0:
        currentMoney += 100;
        break;
      case 1:
        currentMoney += 100;
        break;
      case 2:
        currentMoney += 100;
        break;
      case 3:
        currentMoney += 200;
        break;
      case 4:
        currentMoney += 500;
        break;
      case 5:
        currentMoney += 1000;
        break;
      case 6:
        currentMoney += 2000;
        break;
      case 7:
        currentMoney += 4000;
        break;
      case 8:
        currentMoney += 8000;
        break;
      case 9:
        currentMoney += 16000;
        break;
      case 10:
        currentMoney += 32000;
        break;
      case 11:
        currentMoney += 64000;
        break;
      case 12:
        currentMoney += 125000;
        break;
      case 13:
        currentMoney += 250000;
        break;
      case 14:
        currentMoney += 500000;
        break;
    }
    updateMoneyLadder(currentMoney);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      CorrectAnswerSound.play();
      alert("Correct answer!");
      displayQuestion();
    } else {
      gameWonOverlay.style.display = 'flex';
      gameWonSound.play();
    }
  } else {
    gameOverOverlay.style.display = 'flex';
    gameOverSound.play();
  }
}

const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');

const quizData = [
  {
    question: "Which Team Won The 2014 FIFA World Cup?",
    options: ["A. Brazil", "B. Argentina", "C. Germany", "D. Netherlands"],
    answer: 2
  },
  {
    question: "Which Of The Following is NOT a Disney Character?",
    options: ["A. Mickey Mouse", "B. Daffy Duck", "C. Donald Duck", "D. Goofy"],
    answer: 1
  },
  {
    question: "Who is On The 5$ Bill?",
    options: ["A. Benjamin Frankiln", "B.George Washington ", "C. Abraham Lincoln", "D. Donald Trump"],
    answer: 2
  },
  {
    question: "What is The Biggest Bone in The Body?",
    options: ["A. Skull", "B. Humerus", "C. Spine", "D. Femur"],
    answer: 3
  },
  {
    question: "Who Is The Best Doctor?",
    options: ["A. Dr Ziad Eid", "B. Dr Charles Darwin", "C. Dr Isaac Newton", "D. Dr Albert Einstein"],
    answer: 0
  },
  {
    question: "How Many Cylinders Does A Bugatti Veyron Engine Have?",
    options: ["A. 12", "B. 16", "C. 18", "D. 20"],
    answer: 1
  },
  {
    question: "'Do Not Be Afraid' is The most Repeated Phrase in The Bible, How Many Times Has it been Repeated?",
    options: ["A. 365", "B. 298", "C. 312", "D. 274"],
    answer: 0
  },
  {
    question: "We Are In The Year 2024 A.D. What Does A.D Stand For?",
    options: ["A. After Deliverance", "B. Anne de Deliverance", "C. Anno Domini", "D. Adam Derde"],
    answer: 2
  },
  {
    question: "In Which Country Are The Cities Calagary And Vancouver Located?",
    options: ["A. USA", "B. Canada", "C. The UK", "D. Russia"],
    answer: 1
  },
  {
    question: "Who Wrote Alice in Wonderland?",
    options: ["A. Leo Tolstoy", "B. J.K Rowling", "C. Agatha Christy", "D. Lewis Caroll"],
    answer: 3
  },
  {
    question: "In What City is The Red Square Found?",
    options: ["A. Madrid", "B. Moscow", "C. Rome", "D. Paris"],
    answer: 1
  },
  {
    question: "Which Video Game Was The 2018 Game Of The Year?",
    options: ["A. God of War", "B. Red Dead Redemption 2", "C. Spiderman (PS4)", "D. Super Smash Bros. Ultimate"],
    answer: 0
  },
  {
    question: "In Greek Mythology Who Was Hades' Wife/Lover ?",
    options: ["A. Aphrodite", "B. Athena", "C. Hestia", "D. Persephone"],
    answer: 3
  },
  {
    question: "What is The Fastest Animal on The Planet?",
    options: ["A. The Pedrigan Falcon", "B. The Cheetah", "C. The Ostriche", "D. The Harpy Eagle"],
    answer: 0
  },
  {
  question: "Who is Called The Father Of Radiology?",
  options: ["A. Antoine Henri Becquerel", "B. Charles Theodore Dotter", "C. Wilhelm Conrad Roetgen", "D. Ernest Rutherford"],
  answer: 2
},
];

let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionA.textContent = currentQuestion.options[0];
  optionB.textContent = currentQuestion.options[1];
  optionC.textContent = currentQuestion.options[2];
  optionD.textContent = currentQuestion.options[3];
}

optionA.addEventListener('click', () => checkAnswer(0));
optionB.addEventListener('click', () => checkAnswer(1));
optionC.addEventListener('click', () => checkAnswer(2));
optionD.addEventListener('click', () => checkAnswer(3));

displayQuestion();