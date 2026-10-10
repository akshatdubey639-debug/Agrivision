const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    getFertilizerRecommendationController
} = require("../controller/fertilizer.controller");

router.post(
    "/recommend",
    authMiddleware,
    getFertilizerRecommendationController
);

module.exports = router;
