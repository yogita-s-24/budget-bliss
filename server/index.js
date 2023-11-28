import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import {getApiHealth} from './controllers/health.js'
import { postApiTransaction, getApiTransaction } from "./controllers/transaction.js";
import { postApiSignups, getApiSignups, postApiLogins} from "./controllers/user.js";



const app = express();
app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  if (connection) {
    console.log("MongoBD Connected Successfully");
  }
};
connection();

//post API - /api/signups
app.post('/api/signups', postApiSignups);
//get API - /api/signups/:id
app.get('/api/signups/:id', getApiSignups);

//post API - /api/logins
app.post("/api/logins", postApiLogins);

//post API - /api/transactions
app.post("/api/transactions",postApiTransaction);
//get - /api/transactions
app.get("/api/transactions",getApiTransaction);


//health api for testing
app.get("/api/health", getApiHealth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
