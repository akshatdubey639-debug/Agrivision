const express = require("express");

const router = express.Router();

const {getMandiPriceController} = require("../controller/mandi.controller");

router.get("/:crop", getMandiPriceController);

module.exports = router;