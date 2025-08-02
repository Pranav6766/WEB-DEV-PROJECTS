//node js is single threaded

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //response ka ek empty object hai pane pass already uske andar jo rkhna hai rkho server le jayega
  //createServer returns an object
  console.log(req.url, req.method);
  // process.exit(); //stops event loop

  //routing responses
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>my backend</title></head>");
    res.write("<body><h1>Enter your details: </h1>");

    res.write('<form action="/details" method="POST">');
    // This tells the browser to send the form data to the /details route on your server.
    res.write(
      '<input type="text" name="username" placeholder="Username"/><br>'
    );
    res.write('<label for="male">MALE</label>');
    res.write('<input type="radio" name="gender" id="male" value="male"/><br>');
    res.write('<label for="female">FEMALE</label>');
    res.write(
      '<input type="radio" name="gender" id="female" value="female"/><br>'
    );
    res.write('<input type="submit" value="submit"/>');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");

    return res.end();
    //after writing one res.end() we cant add more responses in the system, so we are using return
    // } else if (req.url === "/products") {
    //   res.setHeader("Content-type", "text/html");
    //   res.write("<html>");
    //   res.write("<head><title>my backend</title></head>");
    //   res.write("<body><h1>under construction</h1></body>");
    //   res.write("</html>");

    //   return res.end();
    // }
  } else if (req.url.toLowerCase() === "/details" && req.method === "POST") {
    //tab hi chale jab koi data lekar aaya ho
    fs.writeFileSync("user.txt", "pranav");
    res.statusCode = 302; //if not set explicitly then 200
    //302 is used for redirecting
    res.setHeader("Location", "/");
    //for redirecting the headerValue must be set as Loaction and nothing else
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
