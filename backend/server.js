import express from "express"; //Es Module
// const express = require('express') - common js
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT

app.use(express.json()) //Allow use to use/parse req.body

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});




const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));