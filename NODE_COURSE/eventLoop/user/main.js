const { error } = require("console");
const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>my backend</title></head>");
    res.write("<body><h1>Enter your details: </h1>");

    res.write('<form action="/details" method="POST">');
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
      const bodyObject = Object.fromEntries(parameters);
      console.log(bodyObject);
      // fs.writeFileSync("user.txt", "pranav");
      //writefilesync blocks everything till its work is finished
      //so use writefile only -> async method
      //writeFile(name,data,callback)
      fs.writeFile("user.txt", JSON.stringify(bodyObject), (error) => {
        console.log("SUCCESS");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    //bahar nhi chalega kyuki maan lo ki file writing fail ho jaye lekin iss case me toh wo redirect phir bhi krega

    //   res.statusCode = 302;
    //   res.setHeader("Location", "/");
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>my backend</title></head>");
    res.write("<body><h1>go to valid page.</h1></body>");
    res.write("</html>");

    return res.end();
  }
};
module.exports = requestHandler;

/*1 3 5 7 6 (4 2)*/