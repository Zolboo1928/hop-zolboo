let too1, too2, product;

let squareBtn = document.querySelector(".square");
let xTo3Btn = document.querySelector(".xTo3");
let yPowerBtn = document.querySelector(".yPower");
let pTo10Btn = document.querySelector(".pTo10");
let tenDByxBtn = document.querySelector(".tenDByx");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let output = document.querySelector(".Output");

let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let clearBtn = document.querySelector(".clear");


input1.addEventListener("input", function (event) {
  let eventEl = event.target;
  too1 = eventEl.value;
});

input2.addEventListener("input", function (event) {
  let eventEl = event.target;
  too2 = eventEl.value;
});

plusBtn.addEventListener("click", () => {
  product = Number(too1) + Number(too2);
  output.value = product;
});
minusBtn.addEventListener("click", () => {
  product = Number(too1) - Number(too2);
  output.value = product;
});
multiplyBtn.addEventListener("click", () => {
  product = Number(too1) * Number(too2);
  output.value = product;
});
divideBtn.addEventListener("click", () => {
  product = Number(too1) / Number(too2);
  output.value = product;
});
clearBtn.addEventListener("click", () => {
    input1.value=null
    input2.value=null
    output.value=null
});
squareBtn.addEventListener("click",() =>{
    
})
xTo3Btn.addEventListener("click",() =>{

})
yPowerBtn.addEventListener("click",() =>{

})
pTo10Btn.addEventListener("click",() =>{

})
tenDByxBtn.addEventListener("click", () => {});

for(let i = 0;i<10;i++){
  const number = document.querySelector()
}