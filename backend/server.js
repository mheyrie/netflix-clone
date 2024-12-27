import express from "express"; //Es Module
// const express = require('express') - common js
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";


const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); //Allow use to use/parse req.body
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});

