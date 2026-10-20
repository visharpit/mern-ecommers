import { ApolloServer, gql } from "apollo-server";
import { users, quotes } from './config/db.js'
import {randomBytes} from 'crypto'; 

const typeDefs = gql`
    type Query{
        users: [User]
        user(id:ID!): User
        quotes: [Quote]
        iquotes(by:ID!): [Quote]
    }
    type User{
        id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        quotes:[Quote]
    } 

    type Quote{
        by: ID
        quote: String
    }

    type Mutation{
        signupUserDummy(userNew:UserInput!): User 
    }
    
    input UserInput{
        firstName:String!,
        lastName:String!,
        email: String!,
        password:String!
    }
`
const resolvers = {
    Query:{
        users:()=>users,
        user:(parent, arg)=>users.find(user=>user.id === arg.id),
        quotes:()=> quotes,
        iquotes:(parent, arg)=>quotes.filter(quote=> quote.by === arg.by)
        
    },
    User:{
        quotes:(user)=> quotes.filter(quote=>quote.by === user.id)
    },
    Mutation:{
        signupUserDummy:(parent, {userNew})=>{
            const id = randomBytes(5).toString('hex');
            users.push({id, ...userNew});
            return users.find(user=> user.id === id);
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(url=>{
    console.log("url", url)
})