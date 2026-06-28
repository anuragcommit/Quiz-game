const btn = document.querySelector("#start_btn");
const h1 = document.querySelector("h1");
const startscreen = document.querySelector("#start_screen");
const questionscreen = document.querySelector(".ques_screen");
const questionElement = document.querySelector("#question");
const answerList = document.querySelector("#answer-list");
const quesNo = document.querySelector("#ques_no");
const score = document.querySelector("#score");
const resultScreen = document.querySelector("#result_screen");
const totalScore = document.querySelector("#total_score");
const remark = document.querySelector("#remark");
const restartBtn = document.querySelector("#restart_btn button");
const progress = document.querySelector(".progress");




const quizQuestions = [
    {
        question: "console.log([1, 2, 3] + [4, 5, 6]);",
        answers: [
            { text: "[1, 2, 3, 4, 5, 6]", correct: false },
            { text: "[[1, 2, 3], [4, 5, 6]]", correct: false },
            { text: '"1,2,34,5,6"', correct: true },
            { text: "Nan", correct: false },
        ],

    },
    {
        question: "console.log(2 + '2' - 2);",
        answers: [
            { text: "20", correct: true },
            { text: "22", correct: false },
            { text: "4", correct: false },
            { text: "Nan", correct: false },
        ],
    },
    {
        question: "console.log(typeof null);",
        answers: [
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: true },
            { text: "function", correct: false },
        ],
    },
    {
        question: "console.log([] == ![]);",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "TypeError", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "console.log(018 - 015);",
        answers: [
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "Nan", correct: false },
            { text: "TypeErroe", correct: false },
        ],
    }
]


function updateProgress() {
    const percentage =
        ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    progress.style.width = `${percentage}%`;
}



let currentQuestionIndex = 0;
let currentScore = 0;

const showQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    quesNo.textContent = currentQuestionIndex + 1;

    updateProgress();
    showOption();
}




const showOption = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    answerList.innerHTML = '';

    for (const answer of currentQuestion.answers) {
        const li = document.createElement("li");
        li.textContent = answer.text;



        li.addEventListener("click", () => {
            console.log(answer.text);
            const allOptions = answerList.querySelectorAll("li");

            allOptions.forEach(option => {
                option.style.pointerEvents = "none";
            });

            if (answer.correct === true) {
                li.classList.add("correct");
                currentScore ++;
                score.textContent = currentScore;

            }
            else {
                li.classList.add("incorrect");

                allOptions.forEach((option, index) => {
                    if (currentQuestion.answers[index].correct) {
                        option.classList.add("correct");
                    }
                });
            }
            setTimeout(nextQuestion, 1000);
        });

        answerList.append(li)

    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionscreen.classList.add("screen");
    resultScreen.classList.remove("screen");

    totalScore.textContent = currentScore;

    if (currentScore === 5) {
        remark.textContent = "Perfect! JavaScript wizard 🧙‍♂️";
    } else if (currentScore >= 3) {
        remark.textContent = "Good effort! Keep learning!";
    } else {
        remark.textContent = "Time to revise those JS quirks 😄";
    }
}


function restartQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;

    score.textContent = 0;
    quesNo.textContent = 1;

    resultScreen.classList.add("screen");
    questionscreen.classList.remove("screen");

    showQuestion();
}



btn.addEventListener("click", () => {
    startscreen.classList.add('screen');
    // console.log(startscreen.className);
    questionscreen.classList.remove('screen');

    showQuestion();
    // showOption();

});

restartBtn.addEventListener("click", restartQuiz);







