const data = require("../Data/data");
const { passwordHash } = require("../Handler/utility");
//this is sample of route handler

const pathHandler = {};

pathHandler.user = (requestProperties, callback) => {
  const methods = ["get", "post", "put", "delete"];
  if (methods.indexOf(requestProperties.method) > -1) {
    pathHandler._users[requestProperties.method](requestProperties, callback);
  } else {
    callback(404, { error: "This is not right method" });
  }
//   callback(200, { message: "This User url" });
  // console.log('Sample');
};
pathHandler._users = {};

pathHandler._users.post = (requestProperties, callback) => {
  const firstName =
    typeof requestProperties.body.firstName == "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : false;
  const lastName =
    typeof requestProperties.body.lastName == "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : false;
  const phone =
    typeof requestProperties.body.phone == "string" &&
    requestProperties.body.phone.trim().length == 11
      ? requestProperties.body.phone
      : false;

  const password =
    typeof requestProperties.body.password == "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;

  const toAgreement =
    requestProperties.body.toAgreement == "true"
      ? true
      : false;

  if (firstName && lastName && phone && password && toAgreement) {
    data.read("user", phone, (err, user) => {
      if (err) {
        let userObj = {
          firstName,
          lastName,
          phone,
          password: passwordHash(password),
          toAgreement,
        };
        data.create("user", phone, userObj, (err1) => {
          if (!err1) {
            callback(200, { "message": "Created Account Sucessfully" });
          } else {
            callback(500, { "error": "Create Account Error" });
          }
        });
      } else {
        callback(500, {
          error: "Already Exist User",
        });
      }
    });
  }
   else {
    callback(400, {
      firstName,
      lastName,
      phone,
      password,
      toAgreement,
    });
  }
};
// pathHandler._users.get = (requestProperties, callback) => {
//   callback(200);
// };
// pathHandler._users.put = (requestProperties, callback) => {};
// pathHandler._users.delete = (requestProperties, callback) => {};

module.exports = pathHandler;
