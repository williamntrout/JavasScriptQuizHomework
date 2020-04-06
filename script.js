// declarations
var leaderBoard = document.getElementById('leaderboard');
var submitButton = document.getElementById('submitButton');
var time = document.getElementById('time');
var gameOver = document.getElementById('gameOver');
var quizQuestions = document.getElementById('quizQuestions');
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById('D');

// questions

let questions = [
    {
        question: "How do you write an IF statment in JavaScript?",
        choiceA: "if (==5)",
        choiceB: "if i==5 then",
        choiceC: "if i don't figure this out i am gonna lose it!",
        choiceD: "if i = 5",
        correct: "A"
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "FunctionManFunction",
        choiceB: "functionFunction",
        choiceC: "funciton MyFunction()",
        choiceD: "Function Function What's My Function",
        correct: "C"
    },
    {
        question: "How do you had a comment to JavaScript?",
        choiceA: "<-THis is a Comment->",
        choiceB: "//THis is a Comment",
        choiceC: "**This is Coment**",
        choiceD: "<*(This is a Comment)*>",
        correct: "B"
    },
    {
        question: "How does a FOR loop start?",
        choiceA: "fir (i = 0; i<=5; i++)",
        choiceB: "four (i = 0; i=5: i++)",
        choiceC: "4 (i=0; i<=5; i++)",
        choiceD: "for (i = 0; i <= 5; i++)",
        correct: "d"
    },
    {
        question: "Where did Byron send his family for Vacation?",
        choiceA: "Disney World",
        choiceB: "Lego Land",
        choiceC: "Disney Land",
        choiceD: "Sea World",
        correct: "A"
    }
];

// variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var currentTime = 59;
var interval;


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

    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    }

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
        quizQuestions.classList.add('d-none');
        gameOver.classList.remove('d-none');
        // end the quiz and show the score
        clearInterval(startTimer);
        // calculate time and show time 
    }
}
// answer is correct
function answerIsCorrect() {
}

// answer is Wrong
function answerIsWrong() {
}

// timer function 
function startTimer() {
    interval = setInterval(function () {
        time.innerHTML = currentTime--;

        if (currentTime === 0) {
            clearInterval(interval)
        }
    }, 1000)
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
    intro.classList.add('d-none');
    quizQuestions.classList.remove('d-none');
    startTimer();
    startQuiz();
});

submitButton.addEventListener('click', function () {
    gameOver.classList.add('d-none');
    leaderBoard.classList.remove('d-none');
});
