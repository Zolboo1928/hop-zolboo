const body = document.body

function changeColor(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    body.style.backgroundColor = ` rgb(${red},${green},${blue})`
}
const interval = setInterval(changeColor,1000)

setTimeout(() => {
    clearInterval(interval)
}, 5000);

const string= document.getElementsByClassName("text")
function effect (sentence){
    for(let i=0;i<sentence.length; i++){
        sentence[i]
    }
}

