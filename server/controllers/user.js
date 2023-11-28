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

const getApiSignups = async(req,res)=>{
    const {id} = req.params;
  
    const fetchUser = await User.findOne({_id : id});
    return responder({
        res,
        success:true,
        data:fetchUser,
        message:"Fetch user details by Id."
    })
  }

export { postApiSignups,getApiSignups };
