let myDate = new Date();
let myTime = myDate.getHours();
console.log(myTime);
let greet = "";
if (myTime > 6 && myTime < 12) {
  greet = "Good Morning";
} else if (myTime >= 12 && myTime <= 18) {
  greet = "Good Afternoon";
} else {
  greet = "Good Night";
}

//2.
let person = " Rana.";
document.querySelector(".greet").innerText = greet + person;

//3.

let noOfTimesClicked = JSON.parse(localStorage.getItem("noOfTimesClicked")) || 0;
updateButton();
function fun() {
  noOfTimesClicked++;
  localStorage.setItem("noOfTimesClicked", JSON.stringify(noOfTimesClicked));
  updateButton();
}

function updateButton() {
  if (noOfTimesClicked % 2 == 0) {
    document.querySelector(".btn").style.backgroundColor = "lightgreen";
  } else {
    document.querySelector(".btn").style.backgroundColor = "lightblue";
  }
  document.querySelector(".data").innerText = `${noOfTimesClicked}`;
}