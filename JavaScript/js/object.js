// let product = {
//   company:'mango',
//   price:861,
//   item_name:'T-shirt',
//   displayPrice: function(){
//     console.log(`price of product is ${this.price}.`);
//   },
// };
// console.log(product.company);
// product.company = 'helloG';
// console.log(product['company']);
// //usecase of bracket methhod
// let newKey = 'price';
// console.log(product['newKey']);

// delete product.company;
// console.log(product);

// product.displayPrice();
// console.log("he llo lets che ck".length)
// console.log("he llo lets che ck".toUpperCase())

//object refernces
//pass by value
// let a = 5;
// let b = a;
// console.log(`${a},${b}`);
// a = 8;
// console.log(`${a},${b}`); //b is unchanged...

// //pass by reference
// let x = { num: 5 };
// let y = x;

// console.log(`x:${x.num} y:${y.num}`);

// x.num = 7;
// console.log(`x:${x.num} y:${y.num}`);

// let p = {pop: 'jkl',};
// let q = {pop: 'jkl',};
// console.log(p == q);
// console.log(p === q);

//object structure
let product = {
    company:'mango',
    price:861,
    item_name:'T-shirt',
    displayPrice: function(){
      console.log(`price of product is ${this.price}.`);
    },
  };

//destructuring
let {company,price} = product;
console.log(company);
console.log(price);

//property shorthand
