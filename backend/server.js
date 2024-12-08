// const express = require('express') - common js
import express from 'express'; //Es Module


const app = express();

app.get("/", (req, res)=>{
    res.send('Server is ready')
})

app.listen(5000, ()=>{
    console.log('Server started at http://localhost:5000');
})