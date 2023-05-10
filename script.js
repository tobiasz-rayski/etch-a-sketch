function createBox() {
  const container = document.getElementById("container-main");
  for (let i = 0; i < 16; i++) {
    const boxRow = document.createElement("div");
    container.appendChild(boxRow);
    boxRow.classList.add("box-row");
    for (j = 0; j < 16; j++) {
      const box = document.createElement("div");
      boxRow.appendChild(box);
      box.classList.add("box");
      box.textContent = "x";
    }
  }
}

createBox();
