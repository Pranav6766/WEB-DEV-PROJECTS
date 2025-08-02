const add = require("./addition");

const handlerequest = (req, res) => {
  res.write("<html><head><title>Calculator</title></head></html>");
  if (req.url === "/") {
    res.write(
      '<body><h1>Welcome to Calculator</h1><a href="/calculator">Click</a></body>'
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(
      '<body><form action="/calculate-result" method="POST"><input type="number" placeholder="Enter number" name="number1"/><input type="number" placeholder="Enter number" name="number2"/><input type="submit"/></form></body>'
    );
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    const body = [];
    //empty array body to collect incoming chunks of data
    req.on("data", (chunks) => {
      //Each time the server receives a chunk of data from the form, it gets pushed into the body array.This continues until the full data is received.
      body.push(chunks);
    });
    req.on("end", () => {
      const str = Buffer.concat(body).toString();
      //Buffer.concat(body) combines all the chunks into a complete Buffer.
      //.toString() converts the buffer into a readable string,
      const params = new URLSearchParams(str);
      const obj = Object.fromEntries(params);
      /*URLSearchParams parses the query string into key-value pairs.Object.fromEntries() converts it into a JavaScript object: */

      const num1 = Number(obj.number1);
      const num2 = Number(obj.number2);

      const result = add(num1, num2);

      res.write(`<body><h3> Sum:${result}  </h3></body>`);
      return res.end();
    });
  }
};

module.exports = handlerequest;
