//1.
console.log("Question 1");
let numbers = [5, 6];
numbers.unshift(4);
numbers.push(7);
console.log(numbers);
console.log("Question 2");
//method to return index
function idxReturn(arr, idx) {
  return arr[idx - 1];
}

let val = idxReturn(numbers, 2);
console.log(val);
//3.
//.slice() method creates a shallow copy of an array when used without parameters.
console.log('Question 3');
let arr = [4, 5, 6, 7, 1, 3, 2, 8, 9];
// let newArr = arr.slice(); //->copies entrie array
let newArr2 = arr.slice(2, 6);
// console.log(newArr);
console.log(newArr2);

//4. and //5.
console.log("Question 4 & 5");
let cnt = 0;
let i = 2;
while (cnt < 5) {
  //checking primes
  let flag = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }
  if (flag === true) {
    console.log(i);
    cnt++;
  }
  i++;
}
console.log("Question 6");
//6.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Question 7");
//7.
let nums = [1, -6, 5, 7, -98];
for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if (element < 0) continue;
  console.log(element);
}
console.log("Question 8");
//8.
let strArray = ["KG", "Coding", "Javascript", "Course", "is", "Best"];
let ans = "";
for (let i = 0; i < strArray.length; i++) {
  ans = ans + strArray[i] + " ";
}
console.log(ans);