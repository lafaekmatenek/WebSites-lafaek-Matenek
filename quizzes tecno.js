const questions = [
    {
        question: "As primeiras redes de computadores eram....",
        Answers: [
            { text: "Complexas ", correct: false },
            { text: "Simples", correct: true },
            { text: "Incompletas", correct: false },
            { text: "Completas", correct: false },
        ]
    },
    {
        question: "A primeira rede a permitir a ligação designa-se por....",
        Answers: [
            { text: "TCP", correct: false },
            { text: "IP", correct: false },
            { text: "ARPA", correct: false },
            { text: "ARPANet", correct: true},
        ]
    },
    {
        question: "A base tecnológica da arquitetura  e do funcionamento da internet é....",
        Answers: [
            { text: "E-mail", correct: false },
            { text: "RCP/IP", correct: true },
            { text: "W.W.W.", correct: false },
            { text: "ARPA", correct: false },
        ]
    },
    {
        question: "A arquitetura da TPC/IP tem quantas camada?",
        Answers: [
            { text: "7", correct: false },
            { text: "3", correct: true },
            { text: "9", correct: false },
            { text: "2", correct: false },
        ]
    },
    {
        question: "O endereço IP é formado por....",
        Answers: [
            { text: "5 bytes", correct: false },
            { text: "2 bytes", correct: false },
            { text: "8 bytes", correct: false },
            { text: "4 bytes", correct: true },
        ]
    },
    {
        question: "O domínio da identidade com é....?",
        Answers: [
            { text: "Comerciais", correct: true },
            { text: "Eductivas", correct: false },
            { text: "Governamentais", correct: false },
            { text: "Org", correct:false },
        ]
    },
    {
        question: "Os protocolos de aplicação mais conhecidos são:....",
        Answers: [
            { text: "Rede digital móvel e HTTML", correct: false },
            { text: "Cabo e Fibra ótica", correct: false },
            { text: "FTP e SMTP", correct: false },
            { text: "SMT, FTP e HTTP", correct: true },
        ]
    },
    {
        question: "facto de permitir que o texto possa conter ligações (hyperlinks ou links) para outros documentos a que os utilizador designa-se por...",
        Answers: [
            { text: "URL", correct: false },
            { text: "HTTP", correct: false },
            { text: "Hipertexto", correct: true },
            { text: "Routers", correct: false},
        ]
    },
    {
        question: "Os URL favoritos no FireFox, designam-se por...",
        Answers: [
            { text: "bookmarks", correct: false },
            { text: "Marcadores", correct: true },
            { text: "Favoritos", correct: false },
            { text: "Bibliotecas", correct: false},
        ]
    },
    {
        question: "Mensalidade significa....",
        Answers: [
            { text: "Custo de rede", correct: false },
            { text: "acesso ao router", correct: false },
            { text: "custo que o cliente paga por mês", correct: true },
            { text: "custo que o cliente deve por mês", correct: false},
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



