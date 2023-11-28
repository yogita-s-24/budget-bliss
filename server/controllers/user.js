import { responder } from "./../util.js";
import User from "../models/User.js";

const postApiSignups = async (req, res) => {
  const { userName, email, password, bankName, contactNumber, address } =
    req.body;

  const user = new User({
    userName,
    email,
    password,
    bankName,
    contactNumber,
    address,
  });

  try {
    const saveUserData = await user.save();
    return responder({
      res,
      success: true,
      data: saveUserData,
      message: "User data save Successfully.",
    });
  } catch (err) {
    return responder({ success: false, message: err.message });
  }
};

export { postApiSignups };
