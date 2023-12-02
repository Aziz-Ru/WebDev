const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("Someone Logging");
  next();
};
// publicRouter.all("*", log);
//log function call all method
//publicRouter.param("user", (req, res, next, id) => {
//this is called once
//   req.user = id == "1" ? "Admin" : "Anonymous";
//   next();
// });
publicRouter.param((param, option) => (req, res, next, id) => {
  if (id == option) {
    req.user = id == "1" ? "Admin" : "Anonymous";
    next();
  } else {
    res.sendStatus(403);
  }
});

publicRouter.get("/", (req, res) => {
  res.send("This is home page");
});
publicRouter.param("user", 1);
publicRouter.get("/:user", (req, res) => {
  res.send(`Hello ${req.user}`);
});
publicRouter.all("*", log);
//log function call after / router

publicRouter.get("/about", (req, res) => {
  res.send("this is home  about page");
});

module.exports = publicRouter;
