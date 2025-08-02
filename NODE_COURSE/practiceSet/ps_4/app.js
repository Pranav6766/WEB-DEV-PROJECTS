const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();
const PORT = 3001;
const path = require("path");
const rootDir = require("./util/pathUtil");
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
app.listen(PORT, () => {
  console.log(`Site running at: http://localhost:${PORT}`);
});
