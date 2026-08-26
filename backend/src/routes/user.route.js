const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { getProfile,updateprofile } = require("../controller/user.controller");


const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.get("/update",authMiddleware,updateprofile)

module.exports = router;