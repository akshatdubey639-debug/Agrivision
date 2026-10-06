const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

const {
    detectDiseaseController,
    getDiseaseHistory
} = require("../controller/disease.controller");

const upload = require("../middleware/upload.middleware");

router.post(
    "/detect",
    authMiddleware,
    upload.single("image"),
    detectDiseaseController
);

router.get("/history/:userId", getDiseaseHistory);

module.exports = router;