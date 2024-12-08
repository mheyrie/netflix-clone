import express from 'express'; //Es Module
// const express = require('express') - common js



const app = express();

app.get("/", (req, res)=>{
    res.send('Server is ready 123')
})

app.listen(5000, ()=>{
    console.log('Server started at http://localhost:5000');
})