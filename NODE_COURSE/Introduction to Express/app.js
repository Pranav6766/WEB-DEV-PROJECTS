// const http = require("http");//core module
// const requestHandler = require("./main");//local module
const express = require("express");//external module

//now we execute the express function and store it in app
const app = express();
//express() returns a function (req, res) with some extra properties/methods added.
//app bhi (req,res) leta as argumnets

//middleware takes (req,res,next) as argumnet and the order of middleware is important
//we add middleware by using app.use function

//use is like a wildcard, "/" match krega toh sab chalega
//get,post are special functionality
app.get("/",(req,res,next) => {//"/" toh universal match krta hai
  console.log("Came in first middleware.",req.url,req.method);
  // res.send("<p>Came from first middleware.</p>")
  next(); //call moves to second middleware, we must either send a response (res.send) or use next call otherwise node will think that response is still coming
})
//Middleware functions run in order, top to bottom.As soon as one of them sends a response (res.send()), the cycle is finished, and no more middleware will be run.

app.post("/details",(req,res,next) => {//("path", callback), ab agar POST method hai tabhi ye wla middleware chalega
  //sirf /details ke lie chalega, upar wale app.use ke next ka koi value nhi hai jab tak path -> /details na ho.
  console.log("Came in second middleware.",req.url,req.method);
  res.send("<p>Welcome to VSCode.</p>")
})

app.use("/",(req,res,next) => {//"/" toh universal match krta hai
  console.log("Came in another middleware.",req.url,req.method);
  res.send("<p>Came from another middleware.</p>")
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`);
});
