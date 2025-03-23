//1.truthy or falsy values
let age = 0;
if (age) {
  console.log("valid age");
} else {
  console.log("hey prabhu");
}

//if alternative
//1.teranary operator
age = 31;
let result = age > 18 ? "chicha" : "boy";
console.log(result);
//2.guard operator
age = 17;
let finalAge = age || 18;
console.log(age);
console.log(finalAge);
//3.deafult operator
age = null;
finalAge = age ?? 18;
console.log(age);
console.log(finalAge);
