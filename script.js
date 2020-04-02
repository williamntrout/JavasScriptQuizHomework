
// var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionField = document.getElementById("questionField");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;



var questions = 
[
    {
        question: "What is the question?",
        choiceA: "answer",
        choiceB: "answer",
        choiceC: "correct",
        choiceD: "answer",
        correct: "C",
    },

     {
        question: "What is the question?",
        choiceA: "answer",
        choiceB: "answer",
        choiceC: "answer",
        choiceD: "correct",
        correct: "D",
    },

        {
        question: "What is the question?",
        choiceA: "correct",
        choiceB: "answer",
        choiceC: "answer",
        choiceD: "answer",
        correct: "A",
    },

        {
        question: "What is the question?",
        choiceA: "answer",
        choiceB: "correct",
        choiceC: "answer",
        choiceD: "answer",
        correct: "B",
    },

    {
        question: "What is the question?",
        choiceA: "answer",
        choiceB: "answer",
        choiceC: "answer",
        choiceD: "correct",
        correct: "C",
    }
]



function displayQuestion(){

    var startQuiz = prompt('Are you ready to start our Quiz?');
    console.log(startQuiz);

    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}