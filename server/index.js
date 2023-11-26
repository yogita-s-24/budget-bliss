import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import Transaction from "./models/Transaction.js";
import {getApiHealth} from './controllers/health.js'
import { postApiTransaction, getApiTransaction } from "./controllers/transaction.js";

const app = express();
app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

if (connection) {
  console.log("MongoBD Connected Successfully");
}
connection();

app.post("/api/transactions",postApiTransaction);

//get - /api/transactions
app.get("/api/transactions",getApiTransaction);

//health api for testing
app.get("/api/health", getApiHealth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
