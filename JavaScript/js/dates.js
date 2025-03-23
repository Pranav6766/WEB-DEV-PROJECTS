let mydate = new Date();
console.log(mydate);

console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getTime());

let button = document.createElement('button');
let div1 = document.createElement('div');

console.log(button);
console.log(div1);

//append
document.querySelector('.myButton').appendChild(div1);
div1.innerText = 'Hello g';