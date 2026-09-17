const express = require("express");

const router = express.Router();

const {
    weatherController
} = require("../controller/weather.controller");


// Get Weather
router.get("/", weatherController);


module.exports = router;