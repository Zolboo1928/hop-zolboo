// a
let star = "*";
let count = prompt("toogoo oruulna uu AAAAA", "3");
for (let i = 0; i < count; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += star + " ";
  }
  console.log(row);
}

// b
let star2 = "*";
for (let i = count; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += star2 + " ";
  }
  console.log(row);
}

// c

let starC = "*";
let space = " ";

let countC = prompt("toogoo oruulna uu CCCCCC", "5");

for (let i = countC - countC; i <= countC - 1; i++) {
  let row = "";
  for(let   c = (countC - countC);c<=2*i; c++){
    row+=space
  }
  for (let j = countC - 1; j >= i; j--) {
    row += starC + " ";
  }
  console.log(row);
}

// d

let starD = "*";
let spaceD = " ";

let countD = prompt("toogoo oruulna uu DDDDDD", "7");

for (let i = countD - 1; i >= 0; i--) {
  let row = "";
  for(let d = 0; d<2*i; d++){
    row +=spaceD
  }
  for (let j = countD - 1; j >= i; j--) {
    row += starD + " ";
  }
  console.log(row);
}

// e

// let countE = prompt("toogoo oruulna uu EEEEEEEEE", "5");
// let square=""
// let spacedRow=""
// for(let i = 1; i<=countE; i++){
//   let space=" "
//     let row = ""
//     if(i===1){
//         for(let j=1; j<=countE;j++){
//             row+=star
//             square+=row
//         }
//     } else if ( i===countE) {
//           for (let j = 1; j <= countE; j++) {
//             row += star;
//             square+=row
//           }
//     } else {
//         for(let k=(countE-2);k>=1;k--){
//           spacedRow+=space
//         }
//         row+=star+spacedRow+star
//         square+=row
//     }
// }
// console.log(square)


let starE="*"
let num=prompt("toogoo oruulna uu SQUARE ","7")
let spaceE=" "
for(let i = 1; i<=num; i++){
  let square=""
  let spacedRow=""
  let row = ""
    if(i===1){
        for(let j=1; j<=num;j++){
            row+=starE+ " "
          }
          square+=row
    } else if ( i===num) {
          for (let j = 1; j <= num; j++) {
            row += starE+" "
          }
          square+=row
    } else {
        for(let k=(num-2);k>=1;k--){
          spacedRow+= spaceE+spaceE
        }
        row+=starE+spacedRow+" " + starE
        square+=row
    }
    console.log(square)
}
