const express = require("express");

const {
    createFarm,
    getMyFarm,
    updateFarm
} = require("../controller/farm.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/createfarm", authMiddleware, createFarm);

router.get("/getfarm", authMiddleware, getMyFarm);

router.put("/updatefarm", authMiddleware, updateFarm);

module.exports = router;


