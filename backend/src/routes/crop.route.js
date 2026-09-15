const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    addCrop,
    getMyCrops,
    getCropById,
    updateCrop,
    deleteCrop
} = require("../controller/crop.controller");


// Add Crop
router.post("/", authMiddleware, addCrop);


// Get All My Crops
router.get("/", authMiddleware, getMyCrops);


// Get Single Crop
router.get("/:id", authMiddleware, getCropById);


// Update Crop
router.put("/:id", authMiddleware, updateCrop);


// Delete Crop
router.delete("/:id", authMiddleware, deleteCrop);


module.exports = router;