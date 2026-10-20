// import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://visharpit09_db_user:E1mk0ptXElJZDgpB@cluster0.ps6pv2z.mongodb.net/StudentDB")

// mongoose.connection.on("connected", ()=>{
//     console.log("connected to mongodb")
// })
// mongoose.connection.on("error", (error)=>{
//     console.log("connection", error)
// })
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const axios = require('axios');

async function startServer(){
    const app = express();
    const server = new ApolloServer({
    typeDefs:`
        type Todo {
            id: ID!
            todo: String!
            completed: Boolean
            user: User
        }
        type User {
            id: ID!
            firstName: String!
            email: String!
            phone: String!
            password: String!
        }
        type Query {
            getTodos: [Todo]
            getUsers: [User]
            getUserById(id:ID): User
        }
    `,
    resolvers: {
        Query:{
            getTodos:async()=>(await axios.get('https://dummyjson.com/todos')).data.todos,
            getUsers: async()=>(await axios.get('https://dummyjson.com/users')).data.users,
            getUserById: async(parent, {id})=>(await axios.get(`https://dummyjson.com/users/${id}`)).data
        },
        Todo:{
            user:async(todo)=>(await axios.get(`https://dummyjson.com/users/${todo.id}`)).data
        }
    }
    })
    await server.start()
    server.applyMiddleware({app, path: '/graphql'});
    app.use(express.json());
    app.use(cors());
    app.listen('3000', ()=>{
        console.log("server started at port 3000")
    })
}
startServer()




