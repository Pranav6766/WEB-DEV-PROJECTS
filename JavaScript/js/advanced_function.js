// //1.
// let sum = function (num1, num2) {
//   return num1 + num2;
// };
// // let newSum = sum;
// // console.log(sum(4, 5));
// // console.log(newSum(4, 5)); //even this one will invoke the function

// //4+5+7 -> 4+5 -> 9+7
// let sumThree = function (a, b, c, sum) {//this function can be used with any name
//   let sum1 = sum(a, b);
//   return sum(sum1, c);
// };
// console.log(sumThree(4,5,7,sum));
// console.log(sumThree);
// console.log(typeof(sumThree));

//2.arrow function
// let sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(8, 9));

// let square = (a) => {
//   return a * a;
// };
// console.log(square(8));

// //can write as->
// //no return no braces
// let sqr = num => num*num;

//3.
// let alarm = () => {
//   console.log("subah ho gyi mamu");
// };
// // let timerId = setTimeout(alarm, 1000);
// // console.log("Alarm set:");
// // clearTimeout(timerId); //cancelled the execution
// let intervalId = setInterval(alarm, 1000);
// setTimeout(() => clearInterval(intervalId),5000);

//4.
// let buttonElement = document.querySelector('.btn');
// let behaviour = (event) =>{
//   console.log('clicked');
// }
// buttonElement.addEventListener('click', behaviour)

// let printDate = (event) =>{
//   console.log(new Date());
// }
// buttonElement.addEventListener('click', printDate);
// buttonElement.removeEventListener('click',behaviour);

//5.
// let arr = [3, 4, 5, 7, 8];
// arr.forEach((num) => {
//   console.log(num);
// });

//6.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let odds = arr.filter((num, index) => {
//   // if (num % 2 === 1) return true;
//   // return false;

//   return num % 2 === 1;
// });
// console.log(odds);

let squares = arr.map((value) => {
  return value * value;
});
console.log(squares);
