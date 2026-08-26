const User = require("../model/User.model");

const getProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user
        });

    } catch (error) {
        console.error("Get profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const updateprofile= async(req,res)=>{
    try{
        const userId= req.user.userId;

        const{fullname,phone,avatar}=req.body

        const user = await User.findById(userId);

       if(!user){
        return res.status(404).json({
            success:false,
            messege:"user not found"
        })
       }
       if(fullname!==undefined)user.fullname=fullname
       if(phone!==undefined)user.phone=phone
       if(avatar!==undefined)user.avatar=avatar

       await user.save()

       return res.status(200).json({
        success:true,
        messege:"user update succefully",

         user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,
                avatar: user.avatar
            }
       })

    }catch(error){
       
        console.error("Update profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

    }


module.exports = {
    getProfile,updateprofile
};