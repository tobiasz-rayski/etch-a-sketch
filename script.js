let button = document.getElementById("button-reset");
let container = document.getElementById("container-sketch");
let containerMain = document.getElementById("container-main");

function generateGrid() {
  for (let i = 0; i < 16; i++) {
    const boxRow = document.createElement("div");
    container.appendChild(boxRow);
    boxRow.classList.add("box-row");
    for (j = 0; j < 16; j++) {
      const box = document.createElement("div");
      boxRow.appendChild(box);
      box.classList.add("box");
    }
  }
}

function changeColor(color) {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = color;
    });
  });
}

function resetGrid() {
  container.remove();
  containerMain.insertBefore(container, button);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const gridSize = prompt("How many squares per side?");
  for (let i = 0; i < gridSize; i++) {
    const boxRow = document.createElement("div");
    container.appendChild(boxRow);
    boxRow.classList.add("box-row");
    for (let j = 0; j < gridSize; j++) {
      const box = document.createElement("div");
      boxRow.appendChild(box);
      box.classList.add("box");
    }
  }
  changeColor("red");
}

function removeContainer() {
  container.remove();
}

button.addEventListener("click", resetGrid);

generateGrid();
changeColor("red");
