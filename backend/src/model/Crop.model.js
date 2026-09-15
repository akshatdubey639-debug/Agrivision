const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        cropName: {
            type: String,
            required: true,
            trim: true
        },

        variety: {
            type: String,
            required: true,
            trim: true
        },

        sowingDate: {
            type: Date,
            required: true
        },

        expectedHarvestDate: {
            type: Date,
            required: true
        },

        area: {
            type: Number,
            required: true
        },

        areaUnit: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            required: true,
            default: "Growing"
        }
    },
    {
        timestamps: true
    }
);

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;