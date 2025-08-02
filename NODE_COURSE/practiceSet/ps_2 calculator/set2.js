const http = require("http");
const handlerequest = require("./routes");
const server = http.createServer((req, res) => {
  console.log(req.method);
  handlerequest(req, res);
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`);
});
