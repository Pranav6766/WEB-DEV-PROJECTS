const express = require("express");
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");//as an object incoming so destructure krna padgea
const app = express();
//EJS installation complete
app.set('view engine', 'ejs');//view engine default value not defined, so ejs mentioned
app.set('views', 'views');//jo engine use krna hai kaha pade hai wo view

const PORT = 3001;
const path = require("path");
const rootDir = require('./util/pathUtil')
// Middleware to parse URL-encoded form data
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: false }));

// Global middleware — runs for all requests regardless of the path or method.
app.use((req, res, next) => {
  // Runs for every incoming request (any method, any path)
  console.log(req.url, req.method);
  next();
});

app.use(userRouter);
app.use("/host", hostRouter);

//sabse last me lagana hota hai error 404 wale middleware ko
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Not found'});
});

app.listen(PORT, () => {
  console.log(`Site running at: http://localhost:${PORT}`);
});
