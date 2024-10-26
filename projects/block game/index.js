const body = document.querySelector("body")
const board = document.querySelector(".board");
const MaxWidth = 500;

let rowCount = 2;
let colCount = 2;
let margin = 100;

const scoreText = document.getElementById("scoreText")
let counter = document.getElementById("counter");
let number=0
counter.innerHTML=number

let timer  = document.getElementById("timer")
let timerNumber = 5;
timer.innerHTML=timerNumber

const restart = () =>{
     board.innerHTML = "";
    
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const oddIndex = Math.floor(Math.random() * colCount * rowCount);

    for (let i = 0; i < rowCount * colCount; i++) {
      const tileEl = document.createElement("div");
      tileEl.className = "tile";
      tileEl.style.width = `${MaxWidth / colCount}px`;
      tileEl.style.height = `${MaxWidth / rowCount}px`;

      if (i === oddIndex) {
        tileEl.addEventListener("click", handleClickCorrect);
        tileEl.style.backgroundColor = `rgb(${red - margin},${green - margin},${
          blue - margin
        })`;
        console.log(oddIndex)
      } else {
        tileEl.addEventListener("click", handleClick);
        tileEl.style.backgroundColor = `rgb(${red},${green},${blue})`;
      }
      board.appendChild(tileEl);
    }
}

const handleClick = () => {
     rowCount = 2;
     colCount = 2;
     margin = 100;
     number=0
     counter.innerHTML = number;
    restart()
};
const handleClickCorrect = () => {
    rowCount += 1
    colCount+=1
   if(margin>20){
     margin = margin-10
   }
    number += 1
    counter.innerHTML = number;
    timerNumber++
    restart()
    timerNumber=6

};
restart()
 
function timerDown(){
  if (timerNumber > 0) {
    timerNumber--
    timer.innerHTML=timerNumber
  }
}
setInterval(timerDown,1000)


