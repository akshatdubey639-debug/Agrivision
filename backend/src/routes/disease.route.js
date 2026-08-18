const express = require("express");
const router = express.Router();

const { detectDiseaseController } = require("../controller/disease.controller");

router.post("/detect",detectDiseaseController);

module.exports = router;