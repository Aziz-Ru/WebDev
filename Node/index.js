//we make people module here

// const people=require('./people');
// console.log(people.people);
// console.log(people.a);
// people.test();

//built in module

//path module:
// const path = require("path");
// const myPath = "/home/silicon/VsCode/Node/index.js";

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.parse(myPath));

//os module:

// const os = require("os");
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());

//fs module:

// const fs = require("fs");
// // fs.writeFileSync('hello.txt', "Hello world");

// // fs.appendFileSync('hello.txt',' how are you');
// fs.readFile("hello.txt", (err, data) => {
//   console.log(data.toString());
// }); //that work asynchronously here main cpu dont work
// console.log("hello");
/*Sync means that work synchronously that works by main cpu */
// const data=fs.readFileSync('hello.txt');
// console.log(data.toString());

//event module:

// const EventEmitter=require('events');

// const emitter=new EventEmitter();
//function for bell
// emitter.on('bell',(text)=>{
//     console.log(`we need to run ${text}`)
// })
// //raise an event
// emitter.emit('bell','for join the class');

const School=require('./people');
const school=new School();
 
school.on('bell',({period,text})=>{
console.log(`we are running because ${period} ${text}`);
});

school.startPeriod();

//http module:

