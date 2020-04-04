var startButton = document.getElementById('startButton')
var quiz = document.getElementById("quiz");
var questionField = document.getElementById("question");
var quizContentElement = document.getElementById('quiz-content')
var answerButtonsElement = document.getElementById("answer-buttons");
var current_index = 0;

var questions = [
    {
        question: "What is question 1?",
        answers: [
            { text: 'A: An answer', correct: false },
            { text: 'B: An answer', correct: false },
            { text: 'C: Correct C', correct: true },
            { text: 'D: An answer', correct: false },
        ]
    },

    {
        question: "What is question 2?",
        answers: [
            { text: 'A: An answer', correct: false },
            { text: 'B: An answer', correct: false },
            { text: 'C: Correct C', correct: true },
            { text: 'D: An answer', correct: false },
        ]
    },

    {
        question: "What is question 3?",
        answers: [
            { text: 'A: An answer', correct: false },
            { text: 'B: An answer', correct: false },
            { text: 'C: Correct C', correct: true },
            { text: 'D: An answer', correct: false },
        ]
    },

    {
        question: "What is question 4?",
        answers: [
            { text: 'A: An answer', correct: false },
            { text: 'B: An answer', correct: false },
            { text: 'C: Correct C', correct: true },
            { text: 'D: An answer', correct: false },
        ]
    },

    {
        question: "What is question 5?",
        answers: [
            { text: 'A: An answer', correct: false },
            { text: 'B: An answer', correct: false },
            { text: 'C: Correct C', correct: true },
            { text: 'D: An answer', correct: false },
        ]
    },
];

// tell the page to start the quiz

// var startQuiz = alert('Are you ready to start our Quiz?'); id= 'start';
//     console.log(startQuiz);

// Press the start button

startButton.addEventListener("click", startQuiz);
console.log(startButton)

// function to tell the quiz to start

function startQuiz() {
    displayQuestion(questions);
};

function selectAnswer(event) {
    // Verify one that is clicked gets the true statement within the array

    var text_received = event.target.innerText;
    //Go through the questions array at the current index - this is the current question
    questions[current_index].answers.forEach(answer => {
        if (answer.text === text_received && answer.correct) {
            console.log("Nailed it")
        }
    })
    answerButtonsElement.innerHTML = ""
    current_index += 1

    if (current_index > questions.length) {
        /// THe gamse is over. Crush heir dreams
    } else {
        displayQuestion(questions)
    }
    // Increase the current_index by one
    // If correct, increase correct
    // Rerun display questions.
}
// function to tell the questions to display the questions and answers in the form on index.html.

function displayQuestion(question_array) {
    questionField.innerText = question_array[current_index].question
    question_array[current_index].answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn-block')
        if (answer.correct) {
            button.dataset.correct = answer.correct

        } else {

        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}
// check for correct answers and keep score

//  time each session and keep track of time

// create high score list number of correct questions / time. low score wins.

// display scores in leader board  