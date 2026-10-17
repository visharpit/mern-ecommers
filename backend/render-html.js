const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res)=>{
  const filePath = path.resolve('index.html');
  res.sendFile(filePath);
})
app.get('/submit', (req, res)=>{
    res.send('<h1>Submit page</h1>')
})
app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})

