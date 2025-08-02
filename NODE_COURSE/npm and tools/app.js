const http = require("http");
// const requestHandler = require("./main");
const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`);
});
