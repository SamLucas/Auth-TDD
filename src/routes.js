const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Samuel",
  email: "samuellucas0603@gmail.com",
  password_hash: "samuellucas"
});

module.exports = routes;
