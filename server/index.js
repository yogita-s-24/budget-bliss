import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import {getApiHealth} from './controllers/health.js'
import { postApiV1Transaction, postApiV2Transaction, getApiTransaction, getApiTransactionByUserId, deleteApiTransactionById } from "./controllers/transaction.js";
import { postApiSignups, getApiSignups, postApiLogins, } from "./controllers/user.js";



const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  if (connection) {
    console.log("MongoBD Connected Successfully");
  }
};
connection();

//post API - /api/signups
app.post('/api/v1/signups', postApiSignups);
//get API - /api/signups/:id
app.get('/api/v1/signups/:id', getApiSignups);

//post API - /api/logins
app.post("/api/v1/logins", postApiLogins);

app.post("/api/v1/transactions",postApiV1Transaction);//post API - /api/v1/transactions
app.post("/api/v2/transactions",postApiV2Transaction); //post API - /api/v1/transactions

//get - /api/transactions
app.get("/api/v1/transactions",getApiTransaction);
app.get("/api/v1/transaction/user/:id", getApiTransactionByUserId);


//delete - /api/trasactions
app.delete("/api/v1/transactions/:id", deleteApiTransactionById);

//health api for testing
app.get("/api/v1/health", getApiHealth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
