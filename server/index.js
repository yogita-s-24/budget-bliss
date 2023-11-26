import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import Transaction from "./models/Transaction.js";
import {getApiHealth} from './controllers/health.js'

const app = express();
app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

if (connection) {
  console.log("MongoBD Connected Successfully");
}
connection();

app.post("/api/transactions", async (req, res) => {
  const { amount, transactionType, category, description } = req.body;

  const transaction = new Transaction({
    amount,
    transactionType,
    category: category || "other",
    description,
  });

  try {
    const saveTransactionData = await transaction.save();

    res.json({
      success: true,
      data: saveTransactionData,
      message: "Transaction Save Successfully.",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

//get - /api/transactions
app.get("/api/transactions", async (req, res) => {
    try {
      const allTransactions = await Transaction.find({});
  
      res.json({
        success: true,
        data: allTransactions,
        message: "All Transactions Fetched Successfully.",
      });
    } catch (err) {
      res.json({
        success: false,
        message: err.message,
      });
    }
  });

//health api for testing
app.get("/api/health", getApiHealth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
