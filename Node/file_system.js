const fs = require("fs");
let content = "";
try {
  fs.writeFileSync(
    "/home/silicon/VsCode/Node/asset/hello.txt",
    "hello programmers "
  );
  //Same as writeFile(), but synchronous instead of asynchronous

  fs.appendFileSync(
    "/home/silicon/VsCode/Node/asset/hello.txt",
    "How Are You Doing"
  );
  
  //Same as appendFile(), but synchronous instead of asynchronous

  content = fs.readFileSync("/home/silicon/VsCode/Node/asset/hello.txt");
  console.log(content.toString() + " asynchronous way");
  // Same as readFile(), but synchronous instead of asynchronous
  // console.log(content);
  /*this is buffer*/

  fs.writeFile(
    "/home/silicon/VsCode/Node/asset/hello.txt",
    "Its works in asynchronous ",
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("data saved");
    }
  );
  //s writeFile(file path,message, callback Function) of asynchronous

  fs.readFile("/home/silicon/VsCode/Node/asset/hello.txt", (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data.toString());
  });
  // Reads the content of a file asynchronously.thats why we need callbackfucntion
} catch (e) {
  console.log(e);
}
