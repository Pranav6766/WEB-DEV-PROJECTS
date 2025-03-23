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
console.log(greet + person);

//3.

let newTime = JSON.parse(localStorage.getItem('newTime')) || 0;
function fun() {
  newTime++;
  localStorage.setItem('newTime',JSON.stringify(newTime));
  if (newTime % 2 == 0) {
    document.querySelector(".btn").style.backgroundColor = "lightgreen";
  } else {
    document.querySelector(".btn").style.backgroundColor = "lightblue";
  }
  document.querySelector(".data").innerText = `${newTime} times.`;
}