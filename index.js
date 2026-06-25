const btn = document.querySelector("#start_btn");
const h1 = document.querySelector("h1");
const start_screen = document.querySelector("#start_screen");
const ques_screen = document.querySelector("#ques_screen");





btn.addEventListener("click", ()=>{
    start_screen.style.display = "none";
    ques_screen.classList.remove("screen");
})