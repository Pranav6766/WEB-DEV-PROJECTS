// let numbers = [1,2,3,4,5,6,7,8];
// console.log(numbers);
// console.log(numbers[4]);

// let another = [1,true,null,'acs']
// console.log(another);
// console.log(another[1]);
// console.log(typeof(another));

// let obj = {jkl: 'no',}
// console.log(Array.isArray(another));
// console.log(Array.isArray(obj));
// console.log(another.length);

// let arr = [1, 4, 5, 7, 2, 3];
// console.log(arr);
// arr.push(6);
// console.log(arr);
// let popped = arr.pop(); /* removes last element
//                         and also returns it. */
// console.log(arr);
// arr.unshift(-1);
// console.log(arr);
// arr.shift();
// console.log(arr);

// arr.splice(1,1);
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.sort()) //sorted array

// //array also uses reference like objects
// let arr2 = arr;
// arr2[0] = 1000;
// console.log(arr);

// //de-structure
// let [a,b,c,d] = arr;//jitne variables utne store hote jayege
// console.log(a+" "+b+" "+c+" "+d)

//-> LOOPS
//1.while
// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i++;
// }
// console.log("Final: " + i);

// let i = 0;
// while (i < 1) {
//   console.log(i);
//   i = Math.random() * 2;
// }
// console.log("Final: " + i);

//2.do-while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 5);

//3.for loop
// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

// let nums = [1, 2, 4, 5, 7, 3, 8, 9, 0];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   const element = nums[i];
//   sum += element;
//   // console.log(element);
// }
// console.log('Sum: ' + sum);

//BREAK AND CONTINUE

for (let i = 0; i < 5; i++) {
  if (i == 2) continue;
  if (i == 4) break;
  console.log(i);
}
