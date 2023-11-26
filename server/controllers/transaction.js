import Transaction from "../models/Transaction.js";

const postApiTransaction =  async (req, res) => {
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
  }

  const getApiTransaction =  async (req, res) => {
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
  }

export {postApiTransaction, getApiTransaction }