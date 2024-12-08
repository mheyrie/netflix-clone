import express from "express"; //Es Module
// const express = require('express') - common js

import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
