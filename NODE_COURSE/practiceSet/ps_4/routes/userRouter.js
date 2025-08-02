const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../util/pathUtil');
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "welcome.html"));
});
module.exports = userRouter;