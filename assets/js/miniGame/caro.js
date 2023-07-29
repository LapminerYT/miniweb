for (let i = 0; i < 30; i++) {
  let slotTemp = ``;
  for (let j = 0; j < 30; j++)
    slotTemp += `<div class="slot" id="${i * 100 + j}"> </div>`;
  let rowCreate = document.createElement("div");
  rowCreate.classList.add("row");
  rowCreate.innerHTML = slotTemp;
  document.querySelector(".grid").appendChild(rowCreate);
}

var slotList = document.querySelectorAll(".slot");
for (let i = 0; i < slotList.length; i++) {
  slotList[i].addEventListener("click", select);
}

let turn = 0,
  slotIdX = 0,
  slotIdO = 0;
let slotX = [],
  slotO = [];
function select() {
  if (turn === 0) {
    this.classList.add("O");
    slotO[slotIdO] = parseInt(this.id);
    slotIdO++;
    check(slotO);
    turn = 1;
  } else {
    this.classList.add("X");
    slotX[slotIdX] = parseInt(this.id);
    slotIdX++;
    check(slotX);
    turn = 0;
  }
  this.removeEventListener("click", select);
  this.innerHTML = null;
}
function check(slots) {
  for (let i = 0; i < slots.length; i++) {
    let checkRow = 0,
      checkRight = 0,
      checkCol = 0,
      checkLeft = 0;
    for (let j = 1; j < 5; j++)
      for (let k = 0; k < slots.length; k++) {
        if (slots[k] == slots[i] + 1 * j) {
          checkRow++;
        }
        if (slots[k] == slots[i] + 101 * j) {
          checkRight++;
        }
        if (slots[k] == slots[i] + 100 * j) {
          checkCol++;
        }
        if (slots[k] == slots[i] + 99 * j) {
          checkLeft++;
        }
      }
    if (checkRow == 4 || checkRight == 4 || checkCol == 4 || checkLeft == 4) {
      if (turn == 0) document.querySelector(".nof").textContent = "O thắng";
      else document.querySelector(".nof").textContent = "X thắng";
      document.querySelector(".hide").classList.remove("hide");
      break;
    }
  }
}
