let age = 55;
let gender = "F";

let discount = 0; //if no condition satisfied
if (age <= 5) {
  discount = (100);
} else if (age > 65) {
  discount = (70);
} else if (age < 8) discount = (50);

if(gender === 'F') {
  discount = Math.max(50,discount);
}
console.log(discount);