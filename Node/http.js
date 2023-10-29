const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello programmers! ");
    res.write("How are you doing");
    res.end();
  } else if (req.url == "./about") {
    res.write("This is about page");
    res.end();
  } else {
    res.write(` Not Found!`);
    res.end();
  }
});

server.listen(5500);
console.log("server is running");
