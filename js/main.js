import {Quiz} from "./quiz.js"
import {Qestiouns} from "./question.js"
const catgoryMenu =document.getElementById("catgoryMenu")
const formDiffculty =document.getElementById("formDiffculty")
const amount =document.getElementById("amount")
const startQuiz =document.getElementById("startQuiz")
const quizOption = document.getElementById("quizOption")
export let allQestiouns;
export let quiz
startQuiz.addEventListener("click",async function(e){
    e.preventDefault()
    quizOption.classList.replace("d-flex","d-none")
    quiz = new Quiz(catgoryMenu.value,formDiffculty.value,amount.value )
    
    allQestiouns= await quiz.getQuiz()
    console.log(allQestiouns); 
    let question = new Qestiouns(0)
    question.displayCard()
})
  


