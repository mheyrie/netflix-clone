import express from "express"; //Es Module
// const express = require('express') - common js
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); //Allow use to use/parse req.body

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});

