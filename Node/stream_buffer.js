const fs=require('fs');

const readStream=fs.createReadStream(`${__dirname}/hello.txt`); 

readStream.on('data',(text)=>{
console.log(text);
//that works asynchronously
});