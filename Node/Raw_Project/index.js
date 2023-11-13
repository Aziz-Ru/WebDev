/*
uptime monitor application
 */

const http=require('http');
const {handleReqRes}=require('./Handler/handler');
const data=require('./Data/data');
const app={};

//app configuration
app.config={
    port:3000,
};


//create server
app.createServer=()=>{
    const server=http.createServer(app.handleReqRes);

    server.listen(app.config.port,()=>{

        console.log(`Server is Running ${app.config.port}`);
    });
}

//handle request and response
app.handleReqRes=handleReqRes;
app.createServer();