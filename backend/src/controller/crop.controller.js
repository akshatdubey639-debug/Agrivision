const Crop = require("../model/Crop.model");


// Add Crop
const addCrop = async (req, res) => {
    try {
        const {
            cropName,
            variety,
            sowingDate,
            expectedHarvestDate,
            area,
            areaUnit,
            status
        } = req.body;

        const crop = await Crop.create({
            user: req.user.userId,
            cropName,
            variety,
            sowingDate,
            expectedHarvestDate,
            area,
            areaUnit,
            status
        });

        return res.status(201).json({
            success: true,
            message: "Crop added successfully",
            data: crop
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to add crop",
            error: error.message
        });
    }
};


// Get My Crops
const getMyCrops = async (req, res) => {
    try {
        const crops = await Crop.find({
            user: req.user.userId
        });

        return res.status(200).json({
            success: true,
            data: crops
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get crops",
            error: error.message
        });
    }
};


// Get Crop By ID
const getCropById = async (req, res) => {
    try {
        const crop = await Crop.findOne({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!crop) {
            return res.status(404).json({
                success: false,
                message: "Crop not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: crop
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get crop",
            error: error.message
        });
    }
};


// Update Crop
const updateCrop = async (req, res) => {
    try {
        const crop = await Crop.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.userId
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!crop) {
            return res.status(404).json({
                success: false,
                message: "Crop not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Crop updated successfully",
            data: crop
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update crop",
            error: error.message
        });
    }
};


// Delete Crop
const deleteCrop = async (req, res) => {
    try {
        const crop = await Crop.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!crop) {
            return res.status(404).json({
                success: false,
                message: "Crop not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Crop deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete crop",
            error: error.message
        });
    }
};


module.exports = {
    addCrop,
    getMyCrops,
    getCropById,
    updateCrop,
    deleteCrop
};