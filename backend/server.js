// import express from 'express';
// import { MongoClient } from 'mongodb';
// const app = express();
// const port = 3000;
// const url = 'mongodb://localhost:27017';
// const dbName = 'studentDB';
// const client = new MongoClient(url);
// app.use(express.json());
// app.get('/data', async(req, res)=>{
//     try{
//         await client.connect();
//         const db = client.db(dbName);
//         const collection  = db.collection('student');
//         const data = await collection.find().toArray();
//         res.json(data);
//     }catch(err){
//         res.status(500).send({error: "error"});
//     }
// })
// app.listen(port, ()=>{
//     console.log('srever is running in port', port);
// })


import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
const app = express();
app.use(express.json())
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = "studentDB";
const client = new MongoClient(url);
let db;

async function connectToDB(){
    await client.connect();
    db = client.db(dbName);
}

app.get('/students', async (req, res) => {
    try {
        const collection = db.collection('student');
        const data = await collection.find().toArray();
        res.json(data);
    }
    catch (error) {
        res.status(500).send({error: error})
    }

})
app.post('/add-student', async(req, res)=>{
    const {name, age} = req.body;
    if(!name || !age){
        return res.status(400).json({
            error: "please provide details"
        })
    }
    const result = await db.collection('student').insertOne({name, age});
    const find = await db.collection("studet").findOne({_id: result.insertedId})
    console.log("find", find, result)
    res.status(201).json({
        success: true,
        message: "user successfully added",
        data: {name, age}
    })
})
app.put('/update-student/:id', async(req, res)=>{

    const id = req.params.id;
    const newBody = req.body;

    if(!ObjectId.isValid(id)){
        return res.status(400).json({error: "invalid student"})
    }
    if(Object.keys(newBody).length === 0){
        res.status(400).json({error: "request body content empty"});
    }
    const result = await db.collection('student').replaceOne({
        _id: new ObjectId(id),
    },  newBody);
    if(result.matchedCount === 1){
        return res.json({message: "student successfully updated"});        
    }else{
        res.status(404).json({err:'student not found'});
    }
});

app.patch('/update-student/:id', async(req, res)=>{
    const id = req.params.id;
    const newBody = req.body;
    if(!ObjectId.isValid(id)){
        res.status(400).json({error: "invalid student"})
    }
    if(Object.keys(newBody)===0){
        res.status(400).json({message: "request body content empty"});
    }
    const result = await db.collection('student').updateOne({
        _id: new ObjectId(id)
    }, {$set: newBody});

    if(result.matchedCount === 1){
        res.json({message: "student successfully updated"})
    }else{
        res.status(404).json({err:'student not found'});
    }
})

app.delete('/delete-student/:id', async(req, res)=>{
    const id = req.params.id;
    if(!ObjectId.isValid(id)){
        res.status(400).json({error: "student is invalid"})
    }
    const result = await db.collection('student').deleteOne({
        _id: new ObjectId(id)
    })
    if(result.deletedCount == 1){
        res.json({message: "user successfully deleted"});
    }else{
        res.status(404).json({message: "user not found"})
    }
})

app.listen(port, async()=>{
     await connectToDB();
    console.log("server is running on port", port)
})