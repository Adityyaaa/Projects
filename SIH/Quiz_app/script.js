const questions = [
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: fals e },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    },
    {
        question: "What is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Rat", correct: false },
            { text: "Monkey", correct: false },
            { text: "Anmol", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();