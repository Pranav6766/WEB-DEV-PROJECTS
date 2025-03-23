let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};
score.displayScore = function () {
  document.querySelector(".para3").innerHTML = `WON : ${score.win}`;
  document.querySelector(".para4").innerHTML = `Lost : ${score.loss}`;
  document.querySelector(".para5").innerHTML = `TIED : ${score.tie}`;
};
function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
function fun(str) {
  document.querySelector(".para").innerHTML = "you chose " + str + " .";
  let randomnum = Math.random() * 3;
  let compChoice = "";
  if (randomnum > 0 && randomnum <= 1) {
    compChoice = "bat";
  } else if (randomnum > 1 && randomnum <= 2) {
    compChoice = "ball";
  } else {
    compChoice = "stump";
  }
  document.querySelector(".para1").innerHTML =
    "computer chose " + compChoice + " .";
  if (str === compChoice) {
    document.querySelector(".para2").innerHTML = "Game TIED!!";
    score.tie++;
  } else {
    comp(str, compChoice);
  }
  updateScore();
  score.displayScore();
}

function comp(str, compChoice) {
  if (str === "bat") {
    if (compChoice === "ball") {
      document.querySelector(".para2").innerHTML = "user won!!🎉";
      score.win++;
    } else {
      document.querySelector(".para2").innerHTML = "computer won!!";
      score.loss++;
    }
  } else if (str == "ball") {
    if (compChoice === "stump") {
      document.querySelector(".para2").innerHTML = "user won!!🎉";
      score.win++;
    } else {
      document.querySelector(".para2").innerHTML = "computer won!!";
      score.loss++;
    }
  } else {
    if (compChoice === "bat") {
      document.querySelector(".para2").innerHTML = "user won!!🎉";
      score.win++;
    } else {
      document.querySelector(".para2").innerHTML = "computer won!!";
      score.loss++;
    }
  }
}
function reset() {
  localStorage.clear();
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  score.displayScore();
}
