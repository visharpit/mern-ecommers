import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/studentDB');
        console.log('database connected successfully');
    } catch (error) {
        console.log(error)
    }
}

export default dbConnection;