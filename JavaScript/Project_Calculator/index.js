let curr_display = "";

function add(val) {
  curr_display = curr_display + val;
  document.querySelector(".screen").value = curr_display;
}
function clearscreen() {
  curr_display = "";
  document.querySelector(".screen").value = curr_display;
}
function calculate() {
  curr_display = eval(curr_display);
  document.querySelector(".screen").value = curr_display;
}
