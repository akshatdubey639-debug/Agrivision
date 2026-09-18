const mongoose=require("mongoose")

const Schema=mongoose.Schema

const farmSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    farmName:{
        type:String,
        require:true,
        trim:true
    },
    location:{
        type:String,
        require:true,
        trim:true,
    },
    state:{
        type:String,
        require:true
    },
    district:{
        type:String,
        require:true,
        trim:true
    },
    landArea:{
        type:Number,
        require:true,
    },
    landUnit:{
        type:String,
        require:true
    },
    soilType:{
        type:String,
        require:true,

    },
    irrigationType:{
        type:String,
        require:true
    },
    mainCrop:{
        type:String,
        require:true
    }

});{timeStamps:true}

const Farm=mongoose.model("Farm",farmSchema)

 module.exports = Farm

