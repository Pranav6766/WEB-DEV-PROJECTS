let product1 = {
  //this is data structure
  //to stroe it we need to convert it into string
  //use json.stringfy
  name: "Adidas",
  price: 1000,
  delivery_time: `${2} days`,
};

//JSON is used for storing and it is a data format not a data structure.
//data stored as key - value pairs
//need to be stored as strings only

//NOW lets store something
localStorage.setItem("Name", "Delete"); //(key, value)
let newProd = JSON.stringify(product1);
localStorage.setItem("newProd", newProd);
localStorage.removeItem("New");

//to retrieve use json.parse
//to convert string back into object
//to make properties of objects accessible
let reProd = JSON.parse(localStorage.getItem("newProd"));
console.log(reProd.delivery_time);
localStorage.clear();