const { buffer } = require("stream/consumers");
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../Route/Route");
const { notFoundPath } = require("../Route/notfound");
const { parseJSON } = require("./utility");

const handler = {};

handler.handleReqRes = (req, res) => {
  //get the url and parse it
  //true means full query string
  const parsedurl = url.parse(req.url, true);
  // console.log(parsedurl);

  const path = parsedurl.pathname;
  // console.log(path);
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  // console.log(trimmedPath);

  //user req in which method post or get or delete etc.
  const method = req.method.toLowerCase();

  //here i get query string of path
  const queryStringObj = parsedurl.query;
//  console.log(queryStringObj);
  //header is meta data that is coming with request
  const headerObj = req.headers;
  // console.log(headerObj);

  const requestProperties = {
    parsedurl,
    path,
    trimmedPath,
    method,
    queryStringObj,
    headerObj,
  };

  //when i send data with GET method that sends in qurery string
  //if we send data with POST methos so data comes our server with request body
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chooseHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundPath;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    //console.log(realData);
    requestProperties.body = parseJSON(realData);
      // console.log(requestProperties.body.phone);
    chooseHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);
      res.writeHead(statusCode);
      res.end(payloadString);
    });

    // res.end("Hello Bangladesi People,How are doing");
  });
};

module.exports = handler;
