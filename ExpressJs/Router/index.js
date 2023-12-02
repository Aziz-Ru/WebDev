const express =require('express');
const adminRouter=require('./adminRouter');
const publicRouter=require('./publicRouter');
const app=express();


app.use('/',publicRouter);
app.use('/admin',adminRouter);
//by adminROuter acivated.



app.listen(3000,()=>{
    console.log("App is running in 3000 port");
})
