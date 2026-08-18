const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiseaseSchema = new Schema({

    user : {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    crop: {
        type: String,
        required: true
    },

    imgUrl : {
        type: String,
        default: ""
    },

    disease : {
        type: String,
        required: true
    },

    confidence : {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },

    symptoms : {
        type: [String],
        default: []
    },

    treatment : {
        type: String,
        default: ""
    },

    prevention : {
        type: String,
        default: ""
    }
},
{
    timestamps: true
});

const Disease = mongoose.model("disease", DiseaseSchema);

module.exports = Disease;