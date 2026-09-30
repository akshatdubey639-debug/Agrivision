const express = require("express");

const router = express.Router();

const {
    getWeatherController
} = require("../controller/weather.controller");

router.get("/:city", getWeatherController);

module.exports = router;