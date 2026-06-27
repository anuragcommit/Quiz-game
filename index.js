const btn = document.querySelector("#start_btn");
const h1 = document.querySelector("h1");
const startscreen = document.querySelector("#start_screen");
const questionscreen = document.querySelector(".ques_screen");
const questionElement = document.querySelector("#question");
const answerList = document.querySelector("#answer-list");




const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],

    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],
    }
]

let currentQuestionIndex = 0;

const showQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
}


const showOption = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    answerList.innerHTML = '';

    for (const answer of currentQuestion.answers) {
        const li = document.createElement("li");

                li.textContent = answer.text;


        li.addEventListener("click", () =>{
                console.log(answer.text);

            if(answer.correct === true){
             li.classList.add("correct")   
            }
            else{
                li.classList.add("incorrect")
            }
}
)
        answerList.append(li)

    }
}


btn.addEventListener("click", () => {
    startscreen.classList.add('screen');
    console.log(startscreen.className);
    questionscreen.classList.remove('screen');

    showQuestion();
    showOption();

})







