const express = require("express");
const {
  registerUser,
  authUser,
  allUser,
} = require("../Controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser).get(allUser);
router.post("/login", authUser);

module.exports = router;
