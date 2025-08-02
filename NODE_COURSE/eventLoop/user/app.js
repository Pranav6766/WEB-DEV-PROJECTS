const http = require("http");
//to use custom module use relative path
const requestHandler = require('./main')
//main.js likhne ka no need .js automaic lga lega
const server = http.createServer(requestHandler);//we can pass the function later on

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server running at : http://localhost:${PORT}`);
}); // 3000 is the port
