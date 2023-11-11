
//this is sample of route handler
const pathHandler={};

pathHandler.sample=(requestProperties,callback)=>{
    callback(200,{message:'This sample url'});
    // console.log('Sample');
};
module.exports=pathHandler;