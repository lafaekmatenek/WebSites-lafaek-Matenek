const questions = [
    {
        question: "Termo de onde provém a palavra Japão; em japonês significa «País do Sol Nascente»",
        Answers: [
            { text: "Nipónico", correct: true },
            { text: "Budismo", correct: false },
            { text: "Hinduismo", correct: false },
            { text: "Xogum", correct: false },
        ]
    },
    {
        question: "Instruções para os funcionários.",
        Answers: [
            { text: "Ritsuryo", correct: true },
            { text: "Noponico", correct: false },
            { text: "Monarquia", correct: false },
            { text: "Xogum", correct: false },
        ]
    },
    {
        question: "Religião assente no respeito pela sacralidade da natureza e em antigos mitos e tradições do Japão. ",
        Answers: [
            { text: "Xintoísmo", correct: true},
            { text: "Xogum", correct: false },
            { text: "Ritsuryo", correct: false },
            { text: "Hinduismo", correct: false },
        ]
    },
    {
        question: "No Japão, governador com autoridade military e civil",
        Answers: [
            { text: "Xógum", correct: true },
            { text: "Ritsuryo", correct: false },
            { text: "Hindu", correct: false },
            { text: "Monarquia", correct: false},
        ]
    },
    {
        question: "Sistema politico, económico e social assente em laços pessoais de natureza vassálica.",
        Answers: [
            { text: "Feudalismo", correct: true },
            { text: "Ritsuryo", correct: false },
            { text: "Hindu", correct: false },
            { text: "Monarquia", correct:false},
        ]
    },
    {
        question: "No Japão, governador com autoridade military e civil",
        Answers: [
            { text: "Xógum", correct:true},
            { text: "Ritsuryo", correct: false },
            { text: "Hindu", correct: false },
            { text: "Monarquia", correct:false},
        ]
    },
    {
        question: "Propriedade concedida a um vassalo pelo seu senhor, como garantia de prestação  de serviço e manutenção de lealdade.",
        Answers: [
            { text: "Budismo", correct: false },
            { text: "Hindu", correct: false },
            { text: "Feudo", correct: true},
            { text: "Xogum", correct: false },
        ]
    },
    {
        question: " Templo romano em honra de todos os deuses.",
        Answers: [
            { text: "Panteão", correct: true },
            { text: "Xogum", correct: false },
            { text: "Ritsuryo", correct: false },
            { text: "Feudo", correct: false },
        ]
    },
    {
        question: " Conjunto de parentes que vivem na mesma casa, em economia comum....",
        Answers: [
            { text: "Família extensa", correct: true },
            { text: "O suku", correct: false },
            { text: "Barlaque", correct: false },
            { text: "Mito", correct: false},
        ]
    },
    {
        question: "Dote de casamento entregue à família da noiva, tradicionalmente em cabeças de gado, mas também em panos e em ouro",
        Answers: [
            { text: "Mito", correct: false },
            { text: "O suku ", correct: false },
            { text: "Familia-extensa", correct: false },
            { text: "Barlaque", correct: true },
        ]
    },
    {
        question: "Conjunto de povoações submetidas à autoridade de um chefe",
        Answers: [
            { text: "O suku", correct: true},
            { text: "Familia-extensa", correct: false },
            { text: "Barlaque", correct: false },
            { text: "Mito", correct: false },
        ]
    },
    {
        question: "Prova material ou testemunho direto do acontecimento a que se refere.",
        Answers: [
            { text: "Fonte-Primaria", correct: true },
            { text: "Fonte-Secundaria", correct: false },
            { text: "Hinduismo", correct: false },
            { text: "Budismo", correct: false },
        ]
    },
    {
        question: "Testemunho ob do através de informação de outra fonte",
        Answers: [
            { text: "Fonte-secundária", correct: true },
            { text: "Fonte-secundária", correct: false },
            { text: "Budismo", correct: false },
            { text: "Xogum", correct: false},
        ]
    },
    {
        question: "Esforso para divulger uma crença.",
        Answers: [
            { text: "Proselitismo", correct: true },
            { text: "Ritsuryo", correct: false },
            { text: "Hindu ", correct: false },
            { text: "Fonte-Secundaria", correct: false },
        ]
    },
    {
        question: "Estabelecimento de carácter comercial fundado para base da colonização e apoio à navegação",
        Answers: [
            { text: "Feitoria", correct: true },
            { text: "Hindu", correct: false },
            { text: "Proselitismo", correct: false },
            { text: "Xogum", correct: false },
        ]
    },
    {
        question: "Nome dado aos fiéis das igrejas reformadas por terem protestado junto do poder  político, devido a não serem autorizados a praticar a sua fé.",
        Answers: [
            { text: "Juncos", correct: true },
            { text: "Xogum", correct: false },
            { text: "Protestante", correct: false },
            { text: "Ritsuryo", correct: false},
        ]
    },
    {
        question: "Um «Departamento dos Juncos de Comércio» geria os tributos provenientes das alfândegas.",
        Answers: [
            { text: "Burocracia chinesa", correct: true },
            { text: "Juncos ", correct: false },
            { text: "Ritsuryo", correct: false },
            { text: "Protestante", correct: false},
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



