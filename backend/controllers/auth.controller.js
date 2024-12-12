import { User } from "../models/user.model.js";

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

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    const newUser = new User({
      email,
      password,
      username,
      image,
    });
    await newUser.save();
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function login(req, res) {
  res.send("Login route");
}

export async function logout(req, res) {
  res.send("Logout route");
}
