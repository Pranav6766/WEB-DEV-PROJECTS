const express = require("express");
const app = express();
const PORT = 3001;
//1.logs request path
app.use((req, res, next) => {
  console.log(req.path);
  next();
});
//2.logs request method
app.use((req, res, next) => {
  console.log(req.method);
  next();
});
//3.return response
// app.use((req, res, next) => {
//   console.log("Sending response.");
//   res.send("Dummy response.");
// });

app.get("/", (req, res, next) => {
  //had app.use been used then / would match evrything starting with / thus locking the response.
  res.send(`<h2>WELCOME</h2>
    <a href="/contact-us">Contact Us</a>`);
});
app.get("/contact-us", (req, res, next) => {
  res.send(`<form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name"/><br>
    <input type="email" name="email" placeholder="Enter your email address"/><br>
    <input type="submit" value="Click"/>
    </form>`);
});
app.post("/contact-us", (req, res, next) => {
  res.send(`<p>You have been registered.</p><br><a href="/">Home</a>`);
});
app.listen(PORT, () => {
  console.log(`Site running at: http://localhost:${PORT}`);
});
