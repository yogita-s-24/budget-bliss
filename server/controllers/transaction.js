import Transaction from "../models/Transaction.js";
import { responder } from "./../util.js";

const postApiV1Transaction = async (req, res) => {
  const { amount, transactionType, category, description } = req.body;

  const transaction = new Transaction({
    amount,
    transactionType,
    category: category || "other",
    description,
  });

  try {
    const saveTransactionData = await transaction.save();

    return responder({
      res,
      success: true,
      data: saveTransactionData,
      message: "Transaction save Successfully.",
    });
  } catch (err) {
    return responder({ success: false, message: err.message });
  }
};
const postApiV2Transaction = async (req, res) => {
  const {user, amount, transactionType, category, description } = req.body;

  const transaction = new Transaction({
    user,
    amount,
    transactionType,
    category: category || "other",
    description,
  });

  try {
    const saveTransactionData = await transaction.save();

    return responder({
      res,
      success: true,
      data: saveTransactionData,
      message: "Transaction save Successfully.",
    });
  } catch (err) {
    return responder({ success: false, message: err.message });
  }
};

const getApiTransaction = async (req, res) => {
  try {
    const allTransactions = await Transaction.find({});

    return responder({
      res,
      success: true,
      data: allTransactions,
      message: "All Transactions Fetched Successfully.",
    });
  } catch (err) {
    return responder({ success: false, message: err.message });
  }
};

export {postApiV1Transaction, postApiV2Transaction, getApiTransaction };
