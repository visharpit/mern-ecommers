import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
}, {collection: 'student'})

const User = mongoose.model('student', userSchema)

export default User