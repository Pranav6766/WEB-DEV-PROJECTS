//1.
let product1 = {
  name: "Adidas",
  price: 1000,
  delivery_time: `${2} days`,
};

//2.
let x = product1;
let y = product1;
x.name = "Nike";
console.log(y.name);
y.name = "Adidas";
//3.
console.log(product1["delivery_time"]);

//4.
let obj = {
  message: "good job",
  status: "complete",
};
let { message, status } = obj;

//5.
let product2 = {
  name: "Puma",
  price: 1099,
  delivery_time: `${4} days`,
};
function isIdenticalProduct(a, b) {
  if (a == b) return true;
  if (typeof a !== "object" || typeof b !== "object") return false;
  if (a.name === b.name && a.price === b.price) {
    return true;
  }
  return false;
}

console.log(isIdenticalProduct(product1, product2));
