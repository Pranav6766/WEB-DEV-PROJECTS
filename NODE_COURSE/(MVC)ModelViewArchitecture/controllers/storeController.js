const Home = require("../models/home");
exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(
    //Whatever you put inside callback(...), it gets assigned to the first parameter of the function you passed in.
    (registeredHomes) => {
      res.render("store/homeList", {
        registeredHomes: registeredHomes,
        pageTitle: "Home",
      });
    }
  );
  //fetchAll hone par jo render karana chahte hain usko argument ki trh pass karo
  //callback me yhi hota hai
};

exports.bookings = (req, res, next) => {
  //Whatever you put inside callback(...), it gets assigned to the first parameter of the function you passed in.
  res.render("store/bookings", {
    pageTitle: "Bookings",
  });
  //fetchAll hone par jo render karana chahte hain usko argument ki trh pass karo
  //callback me yhi hota hai
};

exports.favorite = (req, res, next) => {
  const registeredHomes = Home.fetchAll(
    //Whatever you put inside callback(...), it gets assigned to the first parameter of the function you passed in.
    (registeredHomes) => {
      res.render("store/favoriteList", {
        registeredHomes: registeredHomes,
        pageTitle: "Favorite List",
      });
    }
  );
};

exports.goHome = (req, res) => {
  const registeredHomes = Home.fetchAll(
    //Whatever you put inside callback(...), it gets assigned to the first parameter of the function you passed in.
    (registeredHomes) => {
      res.render("store/homeList", {
        registeredHomes: registeredHomes,
        pageTitle: "Home",
      });
    }
  );
};
