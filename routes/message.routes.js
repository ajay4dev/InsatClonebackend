const express = require("express");
const {
  sendMessage,
  getMessage,
} = require("../controllers/message.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");

const router = express.Router();

router.post("/send/:id", isAuthenticated, sendMessage);
router.get("/all/:id", isAuthenticated, getMessage);

module.exports = router;
