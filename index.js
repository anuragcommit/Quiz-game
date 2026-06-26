const btn = document.querySelector("#start_btn");
const h1 = document.querySelector("h1");
const startscreen = document.querySelector("#start_screen");
const questionscreen = document.querySelector(".ques_screen");


const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ],

},
{
     question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ],
},
{
     question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ],
},
{
     question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ],
}
]



btn.addEventListener("click", () =>{
    startscreen.classList.add('screen');
        console.log(startscreen.className);
    questionscreen.classList.remove('screen');
})