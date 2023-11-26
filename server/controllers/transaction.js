import Transaction from "../models/Transaction.js";
import { responder } from "./../util.js";

const postApiTransaction = async (req, res) => {
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

export { postApiTransaction, getApiTransaction };
