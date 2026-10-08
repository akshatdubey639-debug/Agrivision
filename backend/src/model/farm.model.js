const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const farmSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        farmName: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        state: {
            type: String,
            required: true
        },

        district: {
            type: String,
            required: true,
            trim: true
        },

        landArea: {
            type: Number,
            required: true
        },

        landUnit: {
            type: String,
            required: true
        },

        soilType: {
            type: String,
            required: true
        },

        irrigationType: {
            type: String,
            required: true
        },

        mainCrop: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Farm =
    mongoose.models.Farm || mongoose.model("Farm", farmSchema);

module.exports = Farm;