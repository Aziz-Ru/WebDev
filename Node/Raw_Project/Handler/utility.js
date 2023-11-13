const crypto = require("crypto");

const utility = {};
//parse json to object
utility.parseJSON = (jsonString) => {
    // console.log(jsonString);
  const output = JSON.parse(jsonString);
//   console.log(output);
  return output;
};
utility.passwordHash = (password) => {
  if (typeof password == "string" && password.length > 0) {
    const hash = crypto
      .createHmac("sha256", "password")
      .update(password)
      .digest("hex");
    return hash;
  }
  return false;
};

module.exports = utility;
