//all work related to data done in model

const fs = require("fs");
const path = require("path");
const rootDir = require("../util/pathUtil");

module.exports = class Home {
  constructor(houseName, housePrice, houseLocation, houseRating, houseImage) {
    //local variables
    this.houseName = houseName; //accessing class variables
    this.housePrice = housePrice;
    this.houseLocation = houseLocation;
    this.houseRating = houseRating;
    this.houseImage = houseImage;
  }
  //this refers to current instance of class
  save() {
    this.id = Math.random().toString();//as var values in string
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const filePath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (error) => {
        console.log(error);
      });
      //homes.json me changes hone se nodemon restart hua and isiliye home par kuch display nhi hua
    });
  }

  //function directly related to class uses static
  static fetchAll(callback) {
    //read file
    const filePath = path.join(rootDir, "data", "homes.json");
    fs.readFile(filePath, (error, data) => {
      //asynchronous function hai
      //file read hone se pehle hi wapas chala jayega
      //isiliye callback function use krna hoga
      callback(!error ? JSON.parse(data) : []);
    });
  }
};

/* 
syntax for creating class in js:
class ClassName {
  constructor(param1, param2) {
    this.prop1 = param1;
    this.prop2 = param2;
  }

  methodName() {
    // behavior
  }
}
*/
