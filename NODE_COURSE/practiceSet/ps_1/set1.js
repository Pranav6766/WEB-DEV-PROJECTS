const PORT = 3001;
const http = require("http");

const server = http.createServer((req, res) => {
  //it is just here for teeling what to do when request comes, it cant do anything on its own, we need the listen part to execute function.
  console.log(req.method);

  if (req.url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<header>");
    res.write("<nav>");
    res.write('<a style="margin-right: 10px;" href="/home">Home</a>');
    res.write('<a style="margin-right: 10px;" href="/men">Men</a>');
    res.write('<a style="margin-right: 10px;" href="/women">Women</a>');
    res.write('<a style="margin-right: 10px;" href="/kids">Kids</a>');
    res.write('<a style="margin-right: 10px;" href="/cart">Cart</a>');
    res.write("</nav>");
    res.write("</header>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  //res.end teels the browser that response is ready and take it.
  //Without res.end(), the browser waits forever because it thinks the response is still loading.
  else if (req.url === "/home") {
    res.write("<html>");
    res.write("<body>");
    res.write("<p>Welcome to our shop.</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<html>");
    res.write("<body>");
    res.write("<p>Welcome to men section.</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<html>");
    res.write("<body>");
    res.write("<p>Welcome to women section.</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<html>");
    res.write("<body>");
    res.write("<p>Welcome to kids section.</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<html>");
    res.write("<body>");
    res.write("<p>your items will be displayed here: </p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<body>");
  res.write("<p>invalid page</p>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

server.listen(PORT, () => {
  //This actually starts the server and tells it to begin listening for incoming requests.
  console.log(`server running at : http://localhost:${PORT}`);
});
