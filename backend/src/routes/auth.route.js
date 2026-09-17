const express=require("express")
const { registeruser,loginuser, forgotPassword,resetPassword } = require("../controller/auth.controller")


const router= express.Router()

router.post("/register",registeruser)
router.post("/login",loginuser)
router.post("/forgot-password",forgotPassword)
router.post("/reset-password", resetPassword);


module.exports= router