const data = require("../Data/data");
const { passwordHash } = require("../Handler/utility");
const { parseJSON } = require("../Handler/utility");
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
    requestProperties.body.toAgreement == "true" ? true : false;

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
            callback(200, { message: "Created Account Sucessfully" });
          } else {
            callback(500, { error: "Create Account Error" });
          }
        });
      } else {
        callback(500, {
          error: "Already Exist User",
        });
      }
    });
  } else {
    callback(400, {
      firstName,
      lastName,
      phone,
      password,
      toAgreement,
    });
  }
};
//todo authentication
pathHandler._users.get = (requestProperties, callback) => {
  //check the phone number if valid
  // const tt=requestProperties.body.phone;
  const phone =
    typeof requestProperties.body.phone == "string" &&
    requestProperties.body.phone.trim().length == 11
      ? requestProperties.body.phone
      : false;

  if (phone) {
    // console.log(phone);
    data.read("user", phone, (err, usr) => {
      const user = { ...parseJSON(usr) };
      // console.log(udata);
      if (!err && user) {
        delete user.password;
        callback(200, user);
      } else {
        callback(500, {
          Error: "This is a server side error",
        });
      }
    });
  } else {
    callback(404, {
      Error: "Error in Eqquest",
    });
  }
};
//todo authentication
pathHandler._users.put = (requestProperties, callback) => {
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
  if (phone) {
    if (firstName || lastName || password) {
      data.read("user", phone, (err, uData) => {
        const userData = { ...parseJSON(uData) };
        if (!err && userData) {
          if (firstName) {
            userData.firstName = firstName;
          }
          if (lastName) {
            userData.lastName = lastName;
          }
          if (password) {
            userData.password = passwordHash(password);
          }
          //update to fire base
          data.update("user", phone, userData, (err) => {
            if (!err) {
              callback(200, {
                message: "Your Data is Updated",
              });
            } else {
              callback(404, {
                Error: "something went wrong",
              });
            }
          });
        } else {
          callback(404, {
            error: "You have a problem in Request",
          });
        }
      });
    } else {
      callback(404, {
        error: "You have a problem in Request",
      });
    }
  } else {
    callback(404, {
      Error: "Invalid phone number",
    });
  }
};
//todo authentication
pathHandler._users.delete = (requestProperties, callback) => {
  // this come us by query string
  const phone =
    typeof requestProperties.body.phone == "string" &&
    requestProperties.body.phone.trim().length == 11
      ? requestProperties.body.phone
      : false;

  if (phone) {
    console.log(phone);
    data.read("user", phone, (err, udata) => {
      const userData = { ...parseJSON(udata) };
      // console.log(userData);
      if (!err && userData) {
        data.delete("user", phone, (err1) => {
          if (!err1) {
            callback(200, {
              message: "user was sucessfully delete",
            });
          } else {
            callback(500, { error: "server side error" });
          }
        });
      } else {
        callback(500, { error: "server sise error" });
      }
    });
  } else {
    callback(404, {
      error: "There Was a problem in request ",
    });
  }
};

module.exports = pathHandler;
