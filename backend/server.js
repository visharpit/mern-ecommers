const express = require('express');
const fs = require('fs');
const http = require('http');
const cluster = require('cluster');
const os = require('os');

const app = express();

// app.get('/', (req,res)=>{
//     res.send('Hello');
// })
// app.get('/about', (req, res)=>{
//     res.send('<h1>Hello from about</h1>');
// })
// app.listen(3000, ()=>{
//     console.log('server is running on port 3000');
// })

//strean and buffer

// const readStream = fs.createReadStream('./sample.txt', 'utf-8');
// const writeStream = fs.createWriteStream('./sample-copy.txt');

// readStream.on('data', (chunk)=>{
//     console.log('data', chunk);
//     writeStream.write(chunk);
// })
// readStream.on('end', ()=>{
//     console.log("file read finished");
//     writeStream.end();
// })

//cluster
// const cpuSize = os.cpus().length;
// console.log('cpu length', cpuSize)
// if(cluster.isPrimary){
//     for(let i=0; i < cpuSize; i++){
//         cluster.fork();
//     }   
// }else{
//     http.createServer((req, res)=>{
//         setTimeout(()=>{
//             console.log("request handle successfully");
//         }, 2000)
//     }).listen(3000, ()=>{
//         console.log("server is runncing on port 3000")
//     })
// }

// app.get('/', (req, res)=>{
//     const stream = fs.createReadStream('./sample.txt', 'utf-8');
//     stream.on('data', (chunk)=>res.write(chunk));
//     stream.on('end', ()=> res.end());
// })
// app.listen(3000, ()=>{
//     console.log('server is running on port 3000');
// })