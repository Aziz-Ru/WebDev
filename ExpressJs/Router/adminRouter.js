const express=require('express');
const adminRouter=express.Router();


adminRouter.get('/',(req,res)=>{
    res.send("This is admin Panel");
});
adminRouter.get('/about',(req,res)=>{
    res.send("this is admin about page");
});

module.exports=adminRouter;