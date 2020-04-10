const routes = require("express").Router();
const MVerifyToken = require("./middleware/verifyToken");

const SessionController = require("./app/controller/SessionController");
const DashBoardController = require("./app/controller/DashBoardController");

routes.post("/sessions", SessionController.store);

routes.use(MVerifyToken);

routes.get("/dashboard", DashBoardController.index);

module.exports = routes;
