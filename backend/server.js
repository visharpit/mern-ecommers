import express from 'express';
import userRoute from './user.js';
const app = express();

// const customMiddleware = (req, res, next)=>{
//     if(!req.query.age || req.query.age < 18){
//         res.send("you are not allowed")
//     }else{
//         next();
//     }
// }

// const customMiddleWareUrl = (req, res, next)=>{
//     console.log("url", req.url);
//     next();
// }
// app.get('/login', customMiddleware, customMiddleWareUrl, (req, res)=>{
//     res.send("you are logged in");
// })
// app.use((req, res, next)=>{
//     console.log(`${new Date().toLocaleDateString()}`)
//     next();
// })

// app.get('/', (req, res)=>{
//     res.send("hello");
// })
// app.use('/about', (req, res, next)=>{
//     console.log("about section");
//     next();
// })
// app.use((req, res, next)=>{
//     console.log('url', req.url)
//     next();
// })

// app.use('/user', userRoute);

// app.get('/', (req, res)=>{
//     res.send('<h1> Hello Home </h1>')
// })
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use('/form', express.static('public'))

// app.post('/api/user', (req, res)=>{
// res.json({message: 'JSON Data', data: req.body});
// })

 app.get('/', (req, res)=>{
     res.send('<h1> Hello Home </h1>')
 })
// app.post('/register', (req, res)=>{
//     console.log("Form Body", req.body);
//     res.send(`Thanks for filling the for ${req.body.username}`)
// })

app.get('/fail', (req, res, next)=>{
    const err = new Error('Something went wrong');
    err.statusCode = 400;
    next(err);
})

app.use((err, req, res, next)=>{
    console.log("error", err.message);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    })
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})

