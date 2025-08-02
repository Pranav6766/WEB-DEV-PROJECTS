const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add Home" });
};
exports.homeAdded = (req, res, next) => {
  console.log(req.body);

  const { houseName, housePrice, houseLocation, houseRating, houseImage } =
    req.body;
  const home = new Home(
    houseName,
    housePrice,
    houseLocation,
    houseRating,
    houseImage
  );
  home.save();

  res.render("host/success", { pageTitle: "airbnb" });
};

exports.getHostHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(
    //Whatever you put inside callback(...), it gets assigned to the first parameter of the function you passed in.
    (registeredHomes) => {
      res.render("host/hostHomeList", {
        registeredHomes: registeredHomes,
        pageTitle: "List of Homes",
      });
    }
  );
  //fetchAll hone par jo render karana chahte hain usko argument ki trh pass karo
  //callback me yhi hota hai
};