const express = require("express");

const router = express.Router();

const {
    detectDiseaseController,
    getDiseaseHistory
} = require("../controller/disease.controller");

const upload = require("../middleware/upload.middleware");

router.post(
    "/detect",
    upload.single("image"),
    detectDiseaseController
);

router.get("/history", getDiseaseHistory);

module.exports = router;