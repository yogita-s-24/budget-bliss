import mongoose from "mongoose";
import express, { json } from 'express';
import dotenv from "dotenv"

dotenv.config();

const app =  express();
app.use(express.json())

const connection = async() =>{
    await mongoose.connect(process.env.MONGO_URI)
};

if(connection){
    console.log("MongoBD Connected Successfully");
}
connection();

//health api foe testing 
app.get('/api/health', async(req, res)=>{
    res.send("Server is running");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
