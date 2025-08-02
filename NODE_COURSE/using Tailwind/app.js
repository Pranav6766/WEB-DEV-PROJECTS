const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();
const PORT = 3001;
const path = require("path");
const rootDir = require('./util/pathUtil')
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Global middleware — runs for all requests regardless of the path or method.
app.use((req, res, next) => {
  // Runs for every incoming request (any method, any path)
  console.log(req.url, req.method);
  next();
});

app.use(userRouter);
app.use("/host", hostRouter);
//for using css files or something like that first we need to move it in public folder then use middlware -> express.static()
app.use(express.static(path.join(rootDir, "public")));
//we are making complete public file accessible to all the routes

//sabse last me lagana hota hai error 404 wale middleware ko
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Site running at: http://localhost:${PORT}`);
});
