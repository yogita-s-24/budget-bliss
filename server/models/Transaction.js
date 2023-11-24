import { Schema, model } from "mongoose";

const TransactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    transactionType: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },

    category: {
      type: String,
      enum: [
        "food",
        "education",
        "entertainment",
        "travel",
        "shopping",
        "other",
      ],
      default: "other",
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Transaction = model("Transaction", TransactionSchema);

export default Transaction;
