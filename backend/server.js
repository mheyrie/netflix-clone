import express from 'express'; //Es Module
// const express = require('express') - common js



const app = express();

app.get("/signup", (req, res)=>{
    res.send('Signup route')
})

app.listen(5000, ()=>{
    console.log('Server started at http://localhost:5000');
})