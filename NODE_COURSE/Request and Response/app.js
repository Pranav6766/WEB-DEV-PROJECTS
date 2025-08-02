//node js is single threaded

const http = require("http");

const server = http.createServer((req, res) => {
  //response ka ek empty object hai pane pass already uske andar jo rkhna hai rkho server le jayega
  //createServer returns an object
  console.log(req.url, req.method, req.headers);
  // process.exit(); //stops event loop

  //routing responses
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>my backend</title></head>");
    res.write("<body><h1>home page, welcome</h1></body>");
    res.write("</html>");

    return res.end();
    //after writing one res.end() we cant add more responses in the system, so we are using return 
  } else if (req.url === "/products") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>my backend</title></head>");
    res.write("<body><h1>under construction</h1></body>");
    res.write("</html>");

    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>my backend</title></head>");
  res.write("<body><h1>go to valid page.</h1></body>");
  res.write("</html>");

  return res.end();
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`);
}); // 3000 is the port

//GET -> server se data lena
//POST -> server ko data dena
