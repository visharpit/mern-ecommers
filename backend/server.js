// const https = require('https');
// const fs = require('fs');


// const options = {
//     key: fs.readFileSync('./localhost.key'),
//     cert: fs.readFileSync('./localhost.crt')
// }

// const server = https.createServer(options, (req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write('<h1>Hello Body</hwd1>')
//         res.end("<h1>Helldgwo</h1>");
//     }
// })
// server.listen(3000, () => {
//     console.log('server is running in 3000 port')
// })

// https.get('https://dummyjson.com/users', (res)=>{
//     let data = '';
//     res.on('data', (chunk)=>{
//         data += chunk;
//     })
//     res.on('end', ()=>{
//         console.log('api response:', JSON.parse(data));
//     })
//     res.on('error', (err)=>{
//         console.log("error", err.message);
//     })
// })
// import fetch from 'node-fetch'

// async function fetchData(){
//     try{
//         const response = await fetch('https://dummyjson.com/users');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// fetchData()
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Enter the city name: ', (city)=>{
//     console.log('Your city is: ', city);
//     rl.close();
// })

import axios from 'axios';

async function fetchData(){
    try{
    const result = await axios.get('https://dummyjson.com/users');
    console.log("result", result.data);
    }catch(error){
        console.log("error", error);
    }
}
fetchData();



