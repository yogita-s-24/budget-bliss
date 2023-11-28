import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import {getApiHealth} from './controllers/health.js'
import { postApiV1Transaction, postApiV2Transaction, getApiTransaction, getApiTransactionByUserId } from "./controllers/transaction.js";
import { postApiSignups, getApiSignups, postApiLogins, } from "./controllers/user.js";



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

app.post("/api/v1/transactions",postApiV1Transaction);//post API - /api/v1/transactions
app.post("/api/v2/transactions",postApiV2Transaction); //post API - /api/v1/transactions

//get - /api/transactions
app.get("/api/transactions",getApiTransaction);
app.get("/api/transaction/user/:id", getApiTransactionByUserId);

//health api for testing
app.get("/api/health", getApiHealth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
