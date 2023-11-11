const pathHandler={};

pathHandler.notFoundPath=(requestProperties,callback)=>{
    callback(404,{message:"URL is NOT FOund"});
};
module.exports=pathHandler;