import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });
  res.cookie("jwt-netflix", token, { 
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in Millisecond
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not by JS
    sameSite: "strict",
});
};
