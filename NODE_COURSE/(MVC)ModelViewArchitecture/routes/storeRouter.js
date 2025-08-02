const express = require("express");
const storeRouter = express.Router();
const {
  getHomes,
  bookings,
  favorite,
  goHome,
} = require("../controllers/storeController");
storeRouter.get("/", getHomes);
storeRouter.get("/bookings", bookings);
storeRouter.get("/favoriteList", favorite);
storeRouter.get("/homeList", goHome);
module.exports = storeRouter;
