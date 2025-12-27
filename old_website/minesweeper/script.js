var grid = document.getElementById("grid");
var pressedKeys = {};
window.onkeyup = function (e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function (e) { pressedKeys[e.keyCode] = true; }
var firstclick = "true";
var firstrow;
var firstcol;
var numMines = 20;
var numFlagged = 0;
var gridSize = 10;

generateGrid();

function generateGrid() {
  grid.innerHTML = "";
  for (var i = 0; i < gridSize; i++) {
    row = grid.insertRow(i);
    for (var j = 0; j < gridSize; j++) {
      cell = row.insertCell(j);
      cell.onclick = function () {
        clickCell(this);
      };

      var mine = document.createAttribute("mine");
      mine.value = "false";
      cell.setAttributeNode(mine);
    }
  }
}

function addMines() {
  let minesPlaced = 0;

  while (minesPlaced < numMines) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let cell = grid.rows[row].cells[col];

    if (cell.getAttribute("mine") === "true") {
      continue;
    }

    if (Math.abs(row - firstrow) <= 1 && Math.abs(col - firstcol) <= 1) {
      continue;
    }

    cell.setAttribute("mine", "true");
    minesPlaced++;
  }
}

function revealMines() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var cell = grid.rows[i].cells[j];
      if (cell.getAttribute("mine") == "true")
        cell.className = "mine";
    }
  }
}

function checkLevelCompletion() {
  var levelComplete = true;
  var clickedCells = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if ((grid.rows[i].cells[j].getAttribute("mine") == "false") && (grid.rows[i].cells[j].className == "clicked"))
        clickedCells++;
    }
  }

  if (clickedCells + numMines == gridSize * gridSize) {
    alert("You Win!");
    revealMines();
  }
}

document.addEventListener("keydown", function (event) {


});


function clickCell(cell) {
  if (firstclick == "true") {
    firstclick = "false"

    firstrow = cell.parentNode.rowIndex;
    firstcol = cell.cellIndex;
    addMines();
    revealAdjacentCells(cell);


  }
  else {

    if (pressedKeys[91]) {
      if (cell.classList.contains("flagged")) {
        cell.classList.remove("flagged");
        numFlagged--;
        updateMineCounter();
      } else if (!cell.classList.contains("clicked")) {
        cell.classList.add("flagged");
        numFlagged++;
        updateMineCounter();
      }
    } else {
      if (cell.classList.contains("flagged")) return;

      if (cell.getAttribute("mine") == "true") {
        revealMines();
        alert("Game Over");
      } else {
        revealAdjacentCells(cell);
        checkLevelCompletion();
      }
    }
  }


}

function restartGame() {
  firstclick = "true";
  numFlagged = 0;
  updateMineCounter();
  generateGrid();
}


function revealAdjacentCells(cell) {
  cell.className = "clicked";
  let mineCount = 0;
  let cellRow = cell.parentNode.rowIndex;
  let cellCol = cell.cellIndex;

  for (let i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 9); i++) {
    for (let j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 9); j++) {
      if (grid.rows[i].cells[j].getAttribute("mine") == "true") 
        mineCount++;
    }
  }

  if (mineCount > 0) {
    cell.innerHTML = mineCount;
  } else {
    cell.innerHTML = "";
  }

  if (mineCount === 0) {
    for (let i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 9); i++) {
      for (let j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 9); j++) {
        let adjacentCell = grid.rows[i].cells[j];
        if (adjacentCell.innerHTML === "" && !adjacentCell.classList.contains("clicked")) {
          clickCell(adjacentCell);
        }
      }
    }
  }
}

function updateMineCounter() {
  document.getElementById("mines-remaining").textContent = numMines - numFlagged;
}