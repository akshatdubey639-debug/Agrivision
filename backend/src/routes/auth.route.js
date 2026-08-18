const express=require("express")
const { registeruser } = require("../controller/auth.controller")


const router= express.Router()

router.post("/register",registeruser)

module.exports= router