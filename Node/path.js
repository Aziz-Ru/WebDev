const path = require("path");
const myPath = "/home/silicon/VsCode/Node/path.js";
const obj = { dir: "/home/silicon/VsCode", base: "Node/path.js" };
/*The Path module provides a way of working with
 directories and file paths. */
console.log(path.basename(myPath));
/*path.basename(myPath) Returns the last part of a path */

console.log(path.dirname(myPath));
/*Returns the directories of a path */
console.log(path.extname(myPath));
/*Returns the file extension of a path */
console.log(path.format(obj));
//Required. The path object to format
/*	Formats a path object into a path string */

console.log(path.isAbsolute(myPath));
//Returns true if a path is an absolute path, otherwise false

console.log(path.normalize(myPath));
//Normalizes the specified path

console.log(path.parse(myPath));
//Formats a path string into a path object

console.log(path.join('/','home','Node','Vscode'));
// console.log(path.posix);
//  Returns an object containing all properties and methods of path
