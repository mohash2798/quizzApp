import {allQestiouns} from"./main.js"
import { quiz } from "./main.js"
export class Qestiouns{
    constructor(index){
        this.index=index
        this.catogery=allQestiouns[this.index].category
        this.qestiounLength=allQestiouns.length
        this.qestioun=allQestiouns[this.index].question
        this.incorrect_answer=allQestiouns[this.index].incorrect_answers
        this.correct_answer=allQestiouns[this.index].correct_answer
        this.allChioces=[this.correct_answer,...this.incorrect_answer].sort()
        console.log(this.index);
        console.log(this.catogery);
        console.log(this.qestiounLength);
        console.log(this.qestioun);
        console.log(this.incorrect_answer);
        console.log(this.correct_answer);
        console.log(this.allChioces);
    }
    displayCard(){
       let box =""
        box+=`<div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
        >
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${this.catogery}</span>
            <span class="fs-6 btn btn-questions">${this.index+1} of ${this.qestiounLength}</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.qestioun}</h2>  
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
          ${
           this.allChioces.map(function(li){
                return `<li>${li}</li>`
           }).join("")
          }
          </ul>       
</div>
`
document.getElementById("qeustionBox").innerHTML=box
let allAnswers = document.querySelectorAll(".choices li")
allAnswers.forEach((answer)=>answer.addEventListener("click",(e)=>{
  this.checkAnswer(e.target)
  
}))
    }
    checkAnswer(answer){
      if(answer.innerHTML==this.correct_answer){
        console.log(answer);
        answer.classList.add("correct")
        quiz.score++
        console.log(quiz.score);
        
      }else{
        answer.classList.add("wrong")
      }
      this.index++
      this.nextQues()
      this.anmiteQes(answer)
    }
      anmiteQes(element){
        console.log(element.closest(".question"));
        element.closest(".question").classList.remove("animate__bounceIn")
        element.closest(".question").classList.add("animate__backOutLeft")
      }
   nextQues(){
  if(this.index < allQestiouns.length){
    let newQeus = new Qestiouns(this.index)
    newQeus.displayCard() 
  } else {
    document.querySelector("#qeustionBox").innerHTML = `
      <div id="tryAgainContainer" class="text-center text-white animate__animated animate__bounceIn">
        <h1>Your Score is <span>${quiz.score}</span></h1>
        <button class="btn btn-danger" id="tryAgainBtn">Try Again</button>
      </div>`

    let tryAgainBtn = document.getElementById("tryAgainBtn")
    tryAgainBtn.addEventListener("click", () => {
      window.location.reload()
    })
  }
}


}