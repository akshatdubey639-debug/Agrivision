
const Farm =require("../model/farm.model.js");
const user =require("../model/User.model");

 const createFarm = async (req, res) => {
  try {
    const {
      farmName,
      location,
      state,
      district,
      landArea,
      landUnit,
      soilType,
      irrigationType,
      mainCrop,
    } = req.body;

    const farm = await Farm.create({
      user: req.user._id,
      farmName,
      location,
      state,
      district,
      landArea,
      landUnit,
      soilType,
      irrigationType,
      mainCrop,
    });

    res.status(201).json({
      success: true,
      message: "Farm created successfully",
      farm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyFarm=async(req,res)=>{
    try{
        const farm= await Farm.findOne({user: req.user._id,})

        if(!farm){
            return res.status(400).json({
                success:false,
                message:" farm is not found"
            })
        }
        return res.status(200).json({
            succes:true,
            messege:" form fetched succesfully"
        })
    } catch(error){
    return res.status(400).json({
        success:false,
        message:error.message

    })
}
}
 const updateFarm = async (req, res) => {
    try {
        const {
            farmName,
            location,
            state,
            district,
            landArea,
            landUnit,
            soilType,
            irrigationType,
            mainCrop,
        } = req.body;

        const farm = await Farm.findOneAndUpdate(
            { user: req.user._id },
            {
                farmName,
                location,
                state,
                district,
                landArea,
                landUnit,
                soilType,
                irrigationType,
                mainCrop,
            },
            { new: true, runValidators: true }
        );

        if (!farm) {
            return res.status(404).json({
                success: false,
                message: "Farm is not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Farm updated successfully",
            farm,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports={ createFarm,getMyFarm,updateFarm}