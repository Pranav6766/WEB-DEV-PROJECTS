let turn = "X"; //start with it

let bgMusic = new Audio("music.mp3");
let turnSound = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let winningCombinations = [
  [0, 1, 2, 0, 5, 0],
  [3, 4, 5, 0, 15, 0],
  [6, 7, 8, 0, 25, 0],
  [0, 3, 6, -10, 15, 90],
  [1, 4, 7, 0, 15, 90],
  [2, 5, 8, 10, 15, 90],
  [0, 4, 8, 0, 15, 45],
  [2, 4, 6, 0, 15, -45],
];

// bgMusic.play();
refreshGame();
function displayTurn() {
  let displayChance = document.querySelector(".info");
  displayChance.innerText = `Turn For ${turn}`;
}
function playMyTurn(boxElement) {
  let span = boxElement.querySelector("span");
  if (span.innerText !== "") {
    alert("Not a valid move!!!");
    return;
  }
  span.innerText = turn;
  turnSound.play();
  turn === "X" ? (turn = "O") : (turn = "X");
  displayTurn();
  toCheckWin();
}
function refreshGame() {
  let boxText = document.querySelectorAll(".box-text");
  boxText.forEach((element) => {
    element.innerHTML = "";
  });
  document.querySelectorAll(".box").forEach((box) => {
    box.style.pointerEvents = "auto";
  });
  document.getElementsByTagName("img")[0].style.width = "0px";
  document.querySelector(".line").style.width = "0vw";
  turn = "X";
  displayTurn();
}

// // to check win
function toCheckWin() {
  let element = document.querySelectorAll(".box-text");
  //return an array index 0 to 8
  winningCombinations.forEach((winningRow) => {
    if (
      element[winningRow[0]].innerText !== "" &&
      element[winningRow[0]].innerText === element[winningRow[1]].innerText &&
      element[winningRow[1]].innerText === element[winningRow[2]].innerText
    ) {
      let displayChance = document.querySelector(".info");
      displayChance.textContent = `${element[winningRow[1]].innerText} won!!!`;
      document.querySelector(".line").style.width = "30vw";
      document.querySelector(".line").style.transform = `translate(${winningRow[3]}vw, ${winningRow[4]}vw) rotate(${winningRow[5]}deg)`;
      gameOver.play();
      document.getElementsByTagName("img")[0].style.width = "200px";
      document.querySelectorAll(".box").forEach((box) => {
        box.style.pointerEvents = "none";
      });
    }
  });
}
