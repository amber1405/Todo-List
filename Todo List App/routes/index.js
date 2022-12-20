const express = require("express");
const router = express.Router();
const homeController = require("../controllers/todo_controller");

router.get("/", homeController.home);

module.exports = router;
