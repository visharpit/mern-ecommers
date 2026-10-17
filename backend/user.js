import express from "express";
const app = express.Router();

app.use((req, res, next)=>{
    console.log('method', req.method);
    next();
})

app.get('/', (req, res)=>{
    res.send('<h1> Hello user</h1>')
})

app.get('/profile', (req, res)=>{
    res.send('<h1> Hello Profile </h1>')
})

export default app