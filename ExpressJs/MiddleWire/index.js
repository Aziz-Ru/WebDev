/**
 *  Middleware gets executed after the server receives the request and
 *  before the controller actions send the response. Middleware has the
 *  access to the request object, responses object, and next, it can
 * process the request before the server send a response. An Express-based
 * application is a series of middleware function calls
 */
const express = require("express");

const app = express();
const port = 3000;

// this is application level middlewire bcz app use it
//in middlewire function you cannot send data
const myMiddlewire = (req, res, next) => {
  console.log(`${new Date(Date.now()).toLocaleString()}--${req.method}
  --${req.originalUrl}--${req.protocol}--${req.ip}`);
  //res.end();
  //throw new Error("This is error");
  next();
};
// app.use(myMiddlewire);

//this is configuration middle wire
const loggerWrapper = (option) =>
  function (req, res, next) {
    if (option.log) {
      console.log(`${new Date(Date.now()).toLocaleString()}--${req.method}
  --${req.originalUrl}--${req.protocol}--${req.ip}`);
      next();
    } else {
      throw new Error("This is an error");
    }
  };
app.use(loggerWrapper({ log: false }));

const errorMiddleWire = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("This is serverside error");
};
app.use(errorMiddleWire);

app.get("/", (req, res) => {
  res.send("This root page");
});

app.listen(port, () => {
  console.log(`application is running in ${port}`);
});
