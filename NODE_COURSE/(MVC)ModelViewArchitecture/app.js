const express = require("express");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const app = express();
const { page404 } = require("./controllers/errors");
const PORT = 3001;
const path = require("path");
const rootDir = require("./util/pathUtil");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use("/store",storeRouter);
app.use("/host", hostRouter);
app.use(page404);

app.listen(PORT, () => {
  console.log(`Site running at: http://localhost:${PORT}`);
});