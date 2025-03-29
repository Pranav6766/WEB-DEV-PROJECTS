let inputDir = { x: 0, y: 0 };
let highScore = JSON.parse(localStorage.getItem("highScore")) || 0;

const bgMusic = new Audio("/assets/music.mp3");
const foodSound = new Audio("/assets/food.mp3");
const moveSound = new Audio("/assets/move.mp3");
const gameOver = new Audio("/assets/gameover.mp3");

let score = 0;
let lastPaintTime = 0;
let speed = 7;
let snakeArr = [
  {
    x: 13,
    y: 15,
  },
];
const a = 2;
const b = 16;
//food is not array it is single object
let food = {
  x: Math.round(a + (b - a) * Math.random()),
  y: Math.round(a + (b - a) * Math.random()),
};

displayScore();

//game functions
function main(curr_time) {
  window.requestAnimationFrame(main);
  // console.log(curr_time);

  if ((curr_time - lastPaintTime) / 1000 < 1 / speed) {
    return;
  } else lastPaintTime = curr_time;

  gameEngine();
}

function isCollide(snake) {
  //hits itself
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return true;
    }
  }
  //head hit wall
  if (
    //gridRowStart and gridColumnStart in CSS Grid are 1-based, meaning the first cell starts at 1,1, not 0,0.
    snake[0].x >= 18 ||
    snake[0].x < 1 ||
    snake[0].y >= 18 ||
    snake[0].y < 1
  ) {
    return true;
  }
  return false;
}
function displayScore() {
  let displayHeading = document.querySelector(".score");
  displayHeading.innerHTML = `SCORE: ${score} <br>
   High Score: ${highScore}`;
}
function gameEngine() {
  //update the snake array and food

  if (isCollide(snakeArr)) {
    gameOver.play();
    // bgMusic.pause();
    inputDir.x = 0;
    inputDir.y = 0;
    highScore = Math.max(score, highScore);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    alert("Game Over. Press any key to play again.");
    snakeArr = [{ x: 13, y: 15 }];
    // bgMusic.play();
    score = 0;
    displayScore();
  }
  //if ate food increment score and regenrate food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    score++;
    highScore = Math.max(score, highScore);
    displayScore();
    foodSound.play();
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    //generate new food place
    //can have values between 0 to 17 but lets keep it easy
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  //move the snake
  //-> har block ko uske aage wla pe rkh do
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] }; //destructuring was important
    //otherwise baad me sra block ek hi block ke reference krta
  }
  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;
  //display the snake and food
  //->empty board before showing snake
  //->display the snake
  let board = document.querySelector("#board");
  board.innerHTML = "";
  snakeArr.forEach((element, index) => {
    let snakeElement = document.createElement("div");
    //row number y me define hoga
    snakeElement.style.gridRowStart = element.y;
    snakeElement.style.gridColumnStart = element.x;
    if (index === 0) {
      //means the game started so add head
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake-body");
    }
    board.appendChild(snakeElement);
  });
  //display food
  let foodElement = document.createElement("div");
  //row number y me define hoga
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}
//main logic
//-> for cotinuously rendering animations
window.requestAnimationFrame(main); //argumnet is a function
window.addEventListener("keydown", (event) => {
  inputDir = { x: 0, y: 1 }; //game start
  moveSound.play();

  switch (event.key) {
    case "ArrowUp":
      console.log("Arrowup");
      inputDir.x = 0;
      inputDir.y = -1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});
