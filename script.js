// declarations
var leaderBoard = document.getElementById("leaderboard");
var submitButton = document.getElementById("submitButton");
var time = document.getElementById("time");
var gameOver = document.getElementById("gameOver");
var quizQuestions = document.getElementById("quizQuestions");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var currentTime = 59;
var interval;
var correct = 0;
var incorrect = 0;
// questions

let questions = [
  {
    question: "How do you write an IF statment in JavaScript?",
    choiceA: "if (==5)",
    choiceB: "if i==5 then",
    choiceC: "if i don't figure this out i am gonna lose it!",
    choiceD: "if i = 5",
    correct: "A",
  },
  {
    question: "How do you create a function in JavaScript?",
    choiceA: "FunctionManFunction",
    choiceB: "functionFunction",
    choiceC: "funciton MyFunction()",
    choiceD: "Function Function What's My Function",
    correct: "C",
  },
  {
    question: "How do you had a comment to JavaScript?",
    choiceA: "<-THis is a Comment->",
    choiceB: "//THis is a Comment",
    choiceC: "**This is Coment**",
    choiceD: "<*(This is a Comment)*>",
    correct: "B",
  },
  {
    question: "How does a FOR loop start?",
    choiceA: "fir (i = 0; i<=5; i++)",
    choiceB: "four (i = 0; i=5: i++)",
    choiceC: "4 (i=0; i<=5; i++)",
    choiceD: "for (i = 0; i <= 5; i++)",
    correct: "d",
  },
  {
    question: "Where did Byron send his family for Vacation?",
    choiceA: "Disney World",
    choiceB: "Lego Land",
    choiceC: "Disney Land",
    choiceD: "Sea World",
    correct: "A",
  },
];

// variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;

// start quiz

function startQuiz() {
  displayQuestion(questions);
}

// render a question

function displayQuestion() {
  var q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// render progress

function cycleQuestions() {
  for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {}
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    answerIsCorrect();
  } else {
    // answer is wrong
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    displayQuestion();
  } else {
    quizQuestions.classList.add("d-none");
    gameOver.classList.remove("d-none");
    // end the quiz and show the score
    stopTimer();
    // calculate time and show time
    calculate_score();
  }
}

function stopTimer() {
  clearInterval(interval);
}
// answer is correct
function answerIsCorrect() {
  //   ++correct;
  //   currentTime += 5;
}

function calculate_score() {
  const score = document.getElementById("score-message");
  ///score.innerText = `Score: ${59 - currentTime} `;
  score.innerText = "Score: " + currentTime;
  const high_score = localStorage.getItem("high_score");
  if (currentTime > high_score) {
    // Create an array
    // Stringify the array
    // Set the stringified array to local storage
    localStorage.setItem("high_score", currentTime);
  }
}

// answer is Wrong
function answerIsWrong() {
  ++incorrect;
  currentTime -= 5;
}

// timer function
function startTimer(state) {
  interval = setInterval(function () {
    time.innerHTML = currentTime--;
    if (currentTime === 0) {
      clearInterval(interval);
      return;
    }
  }, 1000);
}

// display score

// function displayScore () {
//     i dont know where to go with this!!!!!
// }

// function addScore () {
//     i dont know where to to gith this???!!??
// if (highscore ) {
//     if (score > highscore) {
//         localStorage.setItem("highscore", score);
//     }
// }
// else {
//     localStorage.setItem("highscore", score);
// }
// }

startButton.addEventListener("click", function () {
  intro.classList.add("d-none");
  quizQuestions.classList.remove("d-none");
  startTimer();
  startQuiz();
});

submitButton.addEventListener("click", function () {
  // Go and grab the high_Score value
  // JSON.parse it
  // Map mover the parsed array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  gameOver.classList.add("d-none");
  leaderBoard.classList.remove("d-none");
});
