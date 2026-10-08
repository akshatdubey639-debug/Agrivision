const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const {
    getFarmHealthController
} = require("../controller/farmHealth.controller");

const router = express.Router();

router.get(
    "/",
    authMiddleware,
    getFarmHealthController
);

module.exports = router;