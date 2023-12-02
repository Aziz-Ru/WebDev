//to install npm i express
const express = require("express");
const app = express();
app.locals.title = "My App";
app.set('view engine','ejs');

// app.use(express.json());
/*app.use(path, callback)
The app.use() function is used to mount the specified middleware
 function(s) at the path which is being specified.
The express.json() function is a built-in middleware function in Express. 
It parses incoming requests with JSON payloads and is based on body-parser. 
*/
// app.use(express.static(`${__dirname}/public/text`));

/*const router = express.Router({
  caseSensitive: true,
});
app.use(router);
*/
// by default router case insensative

// const admin=express();
// app.use('/admin',admin);
// admin.get('/page',(req,res)=>{

//   console.log(admin.mountpath);
//   res.send("This is admin Page");
// })

// app.param("id",(req,res,next,id)=>{
// const user={
//   userid:id,
//   name:"Banglades",
// };
// req.user=user;
// next();
// });
app
  .route("/html/index")
  .get((req, res) => {
    // res.send("This is html index in get method");
    res.render('itro');
  })
  .post((req, res) => {
    res.send("This is html index in post method");
  })
  .put((req, res) => {
    res.send("This is html index in put method");
  });

app.get("/user", (req, res) => {
  // console.log(app.body);
  // console.log(app.locals.title);
  // console.log(req.user);
  res.send("This home page");
});

//this get method
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This home page with post page");
});
//this post method

//request

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
