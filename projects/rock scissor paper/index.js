const body = document.querySelector("body")
const scissor = document.querySelector("#scissor");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const selection = document.querySelector("#selection");
const player1Mark = document.querySelector("#player1Mark");
const computer = document.querySelector("#player2Mark");
const button = document.querySelector("#button")
const winner = document.querySelector("#winner");
const player1Text = document.querySelector("#player1Text");
const player2Text = document.querySelector("#player2Text");
const playAgain = document.querySelector("#playAgain");
let player1Value;
let computerValue;

scissor.addEventListener("click",()=>{
player1Mark.src="imgs/scissor.png"
player1Value = "scissor"
})

rock.addEventListener("click",()=>{
player1Mark.src="imgs/rock2.png"
player1Value = "rock"
})

paper.addEventListener("click",()=>{
player1Mark.src="imgs/paper.png"
player1Value = "paper"
})

const computerValueGenerator = ()=>{
    computerValue = Math.floor(Math.random()*3)+1
    if(computerValue ==1){
        computerValue = "scissor"
    } else if(computerValue ==2){
        computerValue = "rock"
    } else if(computerValue ==3){
        computerValue = "paper"
    }
}
computerValueGenerator()

const revealComputer = ()=>{
    if (computerValue == "scissor") {
      computer.src = "imgs/scissor.png";
    } else if (computerValue == "rock") {
      computer.src = "imgs/rock2.png";
    } else if (computerValue == "paper") {
      computer.src = "imgs/paper.png";
    }
}

const buttonClicked = ()=>{
   if (player1Value!=undefined) {
     computer.style.opacity = "1";
     revealComputer();
     if (computerValue == "scissor" && player1Value == "rock") {
       winner.textContent = "Won";
     } else if (computerValue == "paper" && player1Value == "rock") {
       winner.textContent = "Lost";
     } else if (computerValue == "scissor" && player1Value == "paper") {
       winner.textContent = "Lost";
     } else if (computerValue == "rock" && player1Value == "paper") {
       winner.textContent = "Won";
     } else if (computerValue == "rock" && player1Value == "scissor") {
       winner.textContent = "Lost";
     } else if (computerValue == "paper" && player1Value == "scissor") {
       winner.textContent = "Won";
     } else if (computerValue == player1Value) {
       winner.textContent = "Draw";
     }
     if (winner.textContent == "Won") {
       winner.style.color = "green";
       player1Text.style.color="green"
       player2Text.style.color = "red";
     } else if (winner.textContent == "Lost") {
       winner.style.color = "red";
       player2Text.style.color = "green";
       player1Text.style.color = "red";
     }
     playAgain.style.display="block"
     rock.style.display="none"
     scissor.style.display="none"
     paper.style.display="none"
     button.style.display="none"
   }
}


button.addEventListener("click",buttonClicked)

playAgain.addEventListener("click",()=>{
    location.reload()
})





