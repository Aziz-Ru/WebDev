const http = require("http");
// To make Node.js act as an HTTP server

//The http.createServer() method turns your computer into an HTTP server.
//http.createServer(requestListener(CallbackFunction));

/*The requestListener is a function that is called each time the server gets a request.
function (request, response) {
}
*/
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello programmers! ");
    res.write("How are you doing");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is about page");
    res.end();
  } else {
    res.write(` Not Found!`);
    res.end();
  }
});

server.listen(3000);
console.log("server is running");
