//stream - continuous flow of data
//chunks - parts of data
//buffer - data park hota and organise hota

//node js is single threaded

const fs = require("fs");

const requestHandler = (req, res) => {
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
  } else if (req.url.toLowerCase() === "/details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const str = Buffer.concat(body).toString();
      console.log(str);
      const parameters = new URLSearchParams(str); //to decode

      // const bodyObject = [];
      // for (const [key, value] of parameters.entries()) {
      //   bodyObject[key] = value;
      // }
      const bodyObject = Object.fromEntries(parameters);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
      //needs a string as argumnet to write
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>my backend</title></head>");
  res.write("<body><h1>go to valid page.</h1></body>");
  res.write("</html>");

  return res.end();
};
module.exports = requestHandler;

/*
function greet() {
  console.log("Hello");
}

function bye() {
  console.log("Bye");
}

module.exports = { greet, bye };

now ready to use in other files

this way->
const utils = require('./utils'); //util is object here
utils.greet(); // prints "Hello"
utils.bye();   // prints "Bye"

*/
