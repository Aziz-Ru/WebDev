const { sample } = require("./sample");
const { about } = require("./about");
const {user} =require('./user');

const routes = {
  sample: sample,
  about: about,
  user:user,
};

module.exports = routes;
