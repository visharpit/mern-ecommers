import {login} from './login.js';
import {home} from './home.js';
import {submit} from './submit.js';
import path from 'path'
import express from 'express';

const app = express();
app.use(express.json());
// app.use(express.static(path.resolve('public')))
// const filePath = path.resolve('index.html');
// app.get('/', (req, res)=>{
//     res.sendFile(filePath);
// })
// app.get('/login', (req,res)=>{
//     res.send(login());
// })
// app.get('/submit', (req, res)=>{
//     res.send(submit());
// })
// app.post('/user', (req, res)=>{
//     const {name, email} = req.body
//     res.send(`your name is ${name} and your email is ${email}`);
// })
// app.use((req, res)=>{
//     res.status(404).send("<h1>404 not found</h1>")
// })

let user = [
    {id:1, name: 'Mohan', age:24},
    {id:2, name: 'Prasad', age: 34},
    {id:3, name: 'Riya', age: 21}
]

app.get('/', (req, res)=>{
    res.json(user)
})

app.post('/users', (req, res)=>{
    const newUser = {id:user.length+1, ...req.body};
    user.push(newUser);
    res.status(201).json(newUser);
})

app.put('/user/:id', (req, res)=>{
    const userId = parseInt(req.params.id);
    const index = user.findIndex(u=>u.id === userId);
    if(index === -1){
        return res.status(404).json({message: 'user not found'});
    }
    user[index] = {id:userId, ...req.body};
    res.json(user[index]);
})

app.patch('/user/:id', (req, res)=>{
 const userId = parseInt(req.params.id);
    const index = user.findIndex(u=>u.id === userId);
    if(index === -1){
        return res.status(404).json({message: 'user not found'});
    }
    user[index] = {...user[index], ...req.body};
    res.json({message: "info successfully updated"});
})

app.delete('/user/:id', (req, res)=>{
    const userId = parseInt(req.params.id);
    const index = user.findIndex(u=> u.id === userId);
    if(userId === -1){
        return res.status(404).json({messahe: "user not found"});
    }
    user.splice(index, 1);
    res.json({message: "user successfully deleted"});
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})
