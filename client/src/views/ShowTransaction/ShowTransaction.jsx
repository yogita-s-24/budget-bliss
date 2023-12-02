import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function ShowTransaction() {
  const [userName, setUserName] = useState({});
  const [myTransactions, setMyTransactions] = useState([]);

  const CATEGORY_EMOJI_MAP = {
    "food" : "Food 🍽️",
    "education" : "Education 📚",
    "entertainment" : "Entertainment 🎥",
    "travel" : "Travel ✈️",
    "shopping" : "Shopping 🛍️",
    "freelancing" : "Freelancing 👩🏻‍💻",
    "gift" : "Gift 🎁",
    "salary" : "Salary 💰",
    "other" : "🤷‍♀️",
    
  }

  const loadTransactionData = async () => {
    const userID = userName._id;
    console.log(userID);
    if (!userID) {
      return;
    }

    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/transaction/user/${
        userName._id
      }`
    );

    console.log(response?.data?.data);

    setMyTransactions(response?.data?.data);
  };

  useEffect(
    () => {
      loadTransactionData();
    },
    [userName],
    [myTransactions]
  );

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storageUser) {
      setUserName(storageUser);
    } else {
      alert("Before you proceed, Login is required 🤪");
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl font-extrabold mt-4 font-mono">
        All Transactions
      </h1>
      {myTransactions?.map((transaction, index) => {
        const {
          _id,
          amount,
          transactionType,
          category,
          description,
          createdAt,
          updatedAt,
        } = transaction;

        const date = new Date(createdAt).toLocaleDateString();
        const time = new Date(createdAt).toLocaleTimeString();

        return (
          <div key={index}>
            <div
              className="border w-4/6 mx-auto mt-6 p-2 px-3 bg-white rounded-md relative"
              style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}>
              <div
                className={`font-extrabold font-mono ${
                  transactionType === "debit"
                    ? "text-red-500"
                    : "text-green-500"
                }`}>
                {transactionType === "debit" ? "-" : "+"}
                {amount}
                {"  "}
                <span
                  className={`font-extrabold font-mono ${
                    transactionType === "debit"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}>
                  {transactionType === "debit" ? "debited" : "credited"}
                </span>{" "}
                <span className="text-black">
                  on {date} at {time}
                </span>
              </div>

              <p className="leading-5 absolute right-4 top-2">{CATEGORY_EMOJI_MAP[category]}</p>

              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTransaction;
