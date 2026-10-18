// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(express.static(path.resolve('public')))

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve('index.html'))
// })
// app.listen(3000, ()=>{
//     console.log("server is running on port 3000")
// })

// import mongoose from 'mongoose'

// const dbConnection = async() =>{
//     try{
//         await mongoose.connect('mongodb://localhost:27017/studentDB')
//         console.log("Database successfully connected")
//     }catch(error){
//         console.log('error', error)
//     }
// }
// dbConnection();

// const studentSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// },{collection: 'student'});

// const studentModel = mongoose.model("student", studentSchema)

// const getStudents = async()=>{
//     try{
//         const students = await studentModel.find({})
//         console.log("students", students);
//     }catch(error){
//         console.log("error", error)
//     }
// }

// getStudents();
import express from 'express';
import router from "./userRoutes.js"
import dbConnection from "./config/db.js"

const app = express();
app.use(express.json());
dbConnection();
app.get('/', router)
app.post('/users', router)
app.put('/users/:id', router)
app.delete('/deleteUser/:id', router)
app.listen(3000, ()=>{
    console.log('server is connected to 3000 port');
})