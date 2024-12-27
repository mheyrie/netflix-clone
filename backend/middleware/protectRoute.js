import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import { ENV_VARS } from "../config/envVars.js"


export default protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies['jwt-netflix']
        if(!token){
            return res.status(401).json({success: false, message: "Unauthorized -  No Token Provided"})
        }
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success: false, message: "Invalid Token"})
        }
    } catch (err) {

    }
}