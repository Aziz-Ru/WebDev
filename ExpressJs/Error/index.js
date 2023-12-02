const express = require("express");
const fs=require('fs');
const app = express();

app.get("/", (req, res,next) => {
  // throw new Error("THere is an error");
  //it has default end funtion invisable error handling middlewire
   fs.readFile("/file-exist",(err,data)=>{
    if(err){
        next(err);
    }
    else{
        res.send("data");
    }
   });
  
});
app.listen(3000, () => {
  console.log("App is Running");
});
