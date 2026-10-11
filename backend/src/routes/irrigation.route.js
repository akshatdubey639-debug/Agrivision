
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    getIrrigationRecommendationController
} = require("../controller/irrigation.controller");

router.post(
    "/recommend",
    authMiddleware,
    getIrrigationRecommendationController
);

module.exports = router;
