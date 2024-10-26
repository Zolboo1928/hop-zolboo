const body = document.querySelector("body")

const board = document.createElement("div")
board.className = "board"
body.appendChild(board)
let availableTiles = []

const rowCount = 6,
colCount = 7

for(let i = 0;i<colCount;i++){
    const column = document.createElement("div")
    column.className = "column"
    columnId = `${i}`;
    column.id = columnId;
    board.appendChild(column)
    for(let j = 0;j<rowCount;j++){
        const tile = document.createElement("div")
        tile.className = "tile"
        tileId = `${i}-${j}`
        tile.id=tileId
        availableTiles.push(tile.id)
        column.appendChild(tile)
        column.addEventListener("click",()=>{
        })
    }
}









