const url = require("url");
const queryString=require('querystring')
const urlString="https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";
const myUrl = url.parse(urlString);

const queryUrl=queryString.parse(urlString);


console.log(myUrl);
//When parsed, a URL object is returned containing properties for each of these components.

//myUrl.host='aziz.com:5300';
console.log(myUrl.host);
//Gets and sets the host portion of the URL.

// myUrl.hostname='aziz.com';
console.log(myUrl.hostname);
//gets sets the url hostname

console.log(myUrl.href);
//Gets and sets the serialized URL.

console.log(myUrl.port);
console.log(myUrl.pathname);
//Gets and sets the path portion of the URL.
console.log(myUrl.path);
//
console.log(myUrl.query);
console.log(myUrl.protocol);

console.log(queryUrl);
// console.log(queryString.stringify(queryUrl));
