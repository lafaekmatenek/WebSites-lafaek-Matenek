const questions = [
    {
        question: "a importância da música na sociedade romana deve-se à influência…",
        Answers: [
            { text: "Romana", correct: false },
            { text: "Cultural grega", correct: true },
            { text: "Antiga grécia", correct: false },
            { text: "Muçulmanos", correct: false },
        ]
    },
    {
        question: "Os intrumentos rebeca e alaúde foram introduzidos por.......",
        Answers: [
            { text: "Muçulmanos", correct: true},
            { text: "Romanos", correct: false },
            { text: "Lusitanos", correct: false },
            { text: "cristãos", correct: false },
        ]
    },
    {
        question: "A produção musical continuou dividida em duas grandes áreas, como....",
        Answers: [
            { text: "Classicismo e Barroco", correct: false },
            { text: "música profana e música secular", correct: true},
            { text: "sinfonia e harmonia", correct: false},
            { text: "romântico e clássico", correct: false },
        ]
    },
    {
        question: "A Rádio, a Televisão, o Vinil, a Cassete, o Cd e a Internet surgiram no século.....",
        Answers: [
            { text: "XII", correct: false },
            { text: "VI", correct: false },
            { text: "XX", correct: true },
            { text: " XXI", correct: false },
        ]
    },
    {
        question: "A música estaria ligada aos......",
        Answers: [
            { text: "costumes", correct: false },
            { text: "rituais", correct: false},
            { text: "conventos", correct: false },
            { text: "rituais e cerimónias", correct: true},
        ]
    },
    {
        question: "As várias pinturas rupestres a figura humana é representada em atitude de..... ",
        Answers: [
            { text: "baila", correct: false },
            { text: "movimento e dança", correct: true },
            { text: "valsa e baile", correct: false },
            { text: "força", correct: false},
        ]
    },
    {
        question: "A música curava os doentes porque tinha.....",
        Answers: [
            { text: "poderes mágicos", correct: true},
            { text: "lindas melodias", correct: false },
            { text: "poderes extraordinários", correct: false },
            { text: "boa lírica", correct: false },
        ]
    },
    {
        question: "A presença muçulmana prolongou-se até......",
        Answers: [
            { text: "1999", correct: false },
            { text: "1745", correct: false },
            { text: "1249", correct: true},
            { text: "1336", correct: false},
        ]
    },
    {
        question: "As personagens jocosos tiveram origem do.....",
        Answers: [
            { text: "espetáculo", correct: false},
            { text: "teatro naval", correct: false },
            { text: "circo", correct: false },
            { text: "teatro romano", correct: true },
        ]
    },
    {
        question: "O autor das Cantigas foi.....",
        Answers: [
            { text: "D. João", correct: false },
            { text: "D. Dinis", correct: true },
            { text: "D. Filipe", correct: false},
            { text: "D. Sebastião", correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0,
        score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.Answers.forEach(Answers => {
        const button = document.createElement("button");
        button.innerHTML = Answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (Answers.correct) {
            button.dataset.correct = Answers.correct;
        }
        button.addEventListener("click", selectAnswers);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswers(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.
        length}!`;
        nextButton.innerHTML ="Play Again"
        nextButton.style.display ="block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}




nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        starQuiz();
    }
});

starQuiz();



