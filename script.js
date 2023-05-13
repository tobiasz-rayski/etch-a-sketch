function generateGrid() {
  const container = document.getElementById("container-sketch");
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

generateGrid();
changeColor("red");
