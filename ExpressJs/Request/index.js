const express = require("express");

const cookiesParser =require('cookie-parser');
//to use install  npm i cookie-parser
const app = express();
//main app baseUrl is root so this is blank
/*const adminRoute = express.Router();
adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  res.send("THis is admin dashboard");
});
app.use("/admin", adminRoute);
*/

app.get("/", (req, res) => {
  // console.log(req.baseUrl);  //this balnk but it show sub app url
  //   console.log(req.originalUrl); // it retains the original request URL
  //   console.log(req.method);
  //   console.log(req.protocol);
  //   console.log(req.query); //this gives object of parameter
  //   console.log(req.params); //this is consern about parameter
//   console.log(req.secure); //https hole true
    console.log(req.accepts('html')); //if it accept all files it shows file name
    console.log(req.get('content-type'));
  res.send("This is Response page");
});

app.use(express.json()); // this is a json paser which gives us json object from body
app.use(cookiesParser());

app.post("/", (req, res) => {
  console.log(req.body); //use express.json()
  //req,body gives us always a object
  console.log(req.cookies);
  res.send("This is post page of root");
});

app.listen(3000, () => {
  console.log("app is listening in 3000 port");
});
