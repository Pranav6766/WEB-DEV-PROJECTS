//odd or even
function check(value) {
  if (value % 2 === 0) return "even";
  else return 'odd';
}
//max of 2 numbers
function Max(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
  else return "both values are equal";
}
//celsius to farenheit
function conversion(value) {
  value = (9 * value) / 5 + 32;
  return value;
}

console.log(check(66));
console.log(Max(67,89));
console.log(conversion(19));