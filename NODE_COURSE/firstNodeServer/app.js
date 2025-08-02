//node js is single threaded

const http = require("http");

const server = http.createServer((req, res) => {
  //createServer returns an object
  console.log(req);
  process.exit(); //stops event loop
});
const PORT = 3001
server.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`)
}); // 3000 is the port
