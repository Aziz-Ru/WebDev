const data = require("../Data/data");
const { passwordHash } = require("../Handler/utility");
const { parseJSON } = require("../Handler/utility");
//this is sample of route handler

const pathHandler = {};

pathHandler.tokenhandler = (requestProperties, callback) => {
  const methods = ["get", "post", "put", "delete"];
  if (methods.indexOf(requestProperties.method) > -1) {
    pathHandler._token[requestProperties.method](requestProperties, callback);
  } else {
    callback(404, { error: "This is not right method" });
  }
  //   callback(200, { message: "This User url" });
  // console.log('Sample');
};
pathHandler._token = {};

pathHandler._token.post = (requestProperties, callback) => {
    

};
//todo authentication
pathHandler._token.get = (requestProperties, callback) => {

};
//todo authentication
pathHandler._token.put = (requestProperties, callback) => {
 
};
//todo authentication
pathHandler._token.delete = (requestProperties, callback) => {
  // this come us by query string
 
};

module.exports = pathHandler;
