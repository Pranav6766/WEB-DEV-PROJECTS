const http = require("http");
// const testingSyntax = require("./syntax");
// const runTime = require("./runTime");
const logical = require("./logical");
const server = http.createServer((req, res) => {
  console.log(req);
  // testingSyntax();
  // runTime();
  logical();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`);
});
