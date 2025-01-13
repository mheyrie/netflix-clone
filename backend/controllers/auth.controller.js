import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

//signup
export async function signup(req, res) {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    //check for actual email usage👇
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    //check for password length and if email or username already exists usage👇
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const existingUSerByEmail = await User.findOne({ email: email });
    if (existingUSerByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email Already exists" });
    }

    const existingUSerByUsername = await User.findOne({ username: username });
    if (existingUSerByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username Already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      image,
    });
    await newUser.save();
    generateTokenAndSetCookie(newUser._id, res);

    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

//login
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({email:email})
    if(!user){
      return res.status(404).json({success: false, message: "Invalid credentials"})
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if(!isPasswordCorrect){
      return res.status(400).json({success: false, message: "Invalid credentials"})
    }
    generateTokenAndSetCookie(user._id, res)
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
      },
    });

  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}


//logout
export async function logout(req, res) {
  try {
    res.clearCookie("jwt-netflix");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function authCheck(req, res) {
  try{
    res.status(200).json({success: true, user: req.user})
  } catch(error){
    console.log("Error in authCheck controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}