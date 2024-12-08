import express from 'express'; //Es Module
// const express = require('express') - common js
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express();

console.log("MONGO_URI: ", process.env.MONGO_URI);

app.use('/api/v1/auth', authRoutes)

app.listen(5000, ()=>{
    console.log('Server started at http://localhost:5000');
})

