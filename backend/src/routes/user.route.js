const express = require("express");

const router = express.Router();

const {
    getProfile,
    updateProfile
} = require("../controller/user.controller");


// Get User Profile
router.get("/profile/:id", getProfile);


// Update User Profile
router.put("/profile/:id", updateProfile);


module.exports = router;