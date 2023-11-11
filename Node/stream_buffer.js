const fs = require("fs");

const ReadStream = fs.createReadStream(`${__dirname}/asset/input.txt`, "utf-8");
const WriteStream = fs.createWriteStream(`${__dirname}/asset/output.txt`);
const PipeStream = fs.createWriteStream(`${__dirname}/asset/pipe.txt`);
//fs.createReadStream( path, options )
/*The createReadStream() method is an inbuilt application programming interface of fs module which allow 
you to open up a file/stream and read the data present in it */

ReadStream.on("data", (chunk) => {
  // console.log(content.toString());
  WriteStream.write(chunk);
});
//its a listener

ReadStream.pipe(PipeStream);
//it easiest way read from a file and write another file

const http=require('http');

const server=http.createServer((req,res)=>{
const ServerStream = fs.createReadStream(`${__dirname}/asset/input.txt`, "utf-8");
    ServerStream.pipe(res);
});
server.listen(3000);


//data get from request
/*const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<html><head><title>Form</title></head>');
        res.write('<body><form method="post" action="/process" ><input name="message" /></form></body></html>');
        res.end();
    }
    else if(req.url=='/process'){
        req.on('data',(chunk)=>{
            console.log(chunk.toString());
        })
        res.write('Data Processing');
        res.end();
    }
    else{
        res.write("Not Found");
        res.end();
    }
})
server.listen(3000);  */

console.log('Server is running');

