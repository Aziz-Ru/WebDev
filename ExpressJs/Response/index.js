const express = require("express");
const app = express();

// View engine setup
app.set("view engine", "ejs");

app.get("/skill", (req, res) => {
  res.send("redirected skill page");
});

app.get("/about", (req, res) => {
  /*res.render(view [, locals] [, callback])
  The res.render() function is used to render a view and 
  sends the rendered HTML string to the client.*/
  /* 
  res.render("pages/about", {
    name: "Abdul Aziz",
    country: "Bangladesh",
    age: "22",
    // these are local variables
  });
   */

  /*
The res.json() function sends a JSON response. This method sends a response 
(with the correct content-type) that is the parameter converted to 
a JSON string using the JSON.stringify() method.
 It returns an Object.
 */
  /*
res.json({
  name: "Abdul Aziz",
    country: "Bangladesh",
    age: "22",
});
*/
  /*

The res.status() function set the HTTP status for the response. 
Parameter: This function accepts a single parameter code that holds the HTTP status code. 
Return Value: It returns an Object. 
 */
  res.status(200);
  /*
res.format() function performs content negotiation on the Accept HTTP header on the request object 
if it is present. This function checks the Accept HTTP request header and 
then invokes the corresponding handler depending on the Accept value. 
 */
  /*
  res.format({
    "text/plain":()=>{
      res.send('Hi, this is plain text');
    },
    "text/html": () => {
      res.send("This is html format file");
    },
    "application/json": () => {
      res.json({
        message: "this is application json",
      });
    },
    default: () => {
      res.send("this is default");
    },
  });
  */
  /*
 The res.cookie() function is used to set the cookie name to value. The value
  parameter may be a string or object converted to JSON.
  res.cookie(name, value [, options])
  It returns an Object.
  */
  res.cookie("name", "Abdul Aziz");
  //  res.send('cookie already send');

  /*
The res.location() function is used to set the response Location HTTP header to the 
path parameter which is being specified. Basically, it is used 
to set the response header. It doesn’t end the response, after 
using it you can write a response body if you want to write.
res.location( path )
path: It refers to the URL which is specified in the Referrer header of the request.

*/
  res.location("https://google.com");

  /*
The res.redirect() function redirects to the URL derived from the specified path, with specified status, an integer (positive) which corresponds to an HTTP status code. 
 */
  // res.redirect("/skill");

  /**
   The res.set() function is used to set the response HTTP header field to value.
   res.set(field [, value])
   Parameters: The field parameter is the name of the field and the value parameter is the value assigned to the field parameter.
  Return Value: It returns an Object.
   */
  res.set("Name", "Abdul Aziz");
  console.log(res.get("Name"));
  // res.json({
  //   Header_Name: "Abdul Aziz",
  //   Header_location: "Google.com",
  //   Cookie: "Abdul Aziz",
  //   StatusCode: 200,
  // });
  res.render("pages/about", {
    name: "Abdul Aziz",
    country: "Bangladesh",
    age: "22",
    // these are local variables
  });
  res.end();
});

app.listen(3000, () => {
  console.log("App is running in 3000 port");
});
