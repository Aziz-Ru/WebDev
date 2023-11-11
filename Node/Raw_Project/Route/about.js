
//this is about of route handler
const pathHandler={};

pathHandler.about=(requestProperties,callback)=>{
    callback(300,{message:'This About Page'});
    // console.log('Sample');
};
module.exports=pathHandler;