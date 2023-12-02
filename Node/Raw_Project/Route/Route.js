const { sample } = require("./sample");
const { about } = require("./about");
const {user} =require('./user');
const {token}=require('./token')
const routes = {
  sample: sample,
  about: about,
  user:user,
  token:token
};

module.exports = routes;
