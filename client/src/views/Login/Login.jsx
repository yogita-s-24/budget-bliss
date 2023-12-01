import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import showToast from "crunchy-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    if (!email) {
      showToast("Email is required", "alert", 4000);
      return;
    }
    if (!password) {
      showToast("Password is required", "alert", 4000);
      return;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/logins`,{ email, password }
    );
    console.log(response?.data);

    if(response?.data?.success){
      showToast(response.data.message, "success", 3000);
      localStorage.setItem('user', JSON.stringify(response?.data.data));
      window.location.href = "/addtransaction";
    }
    else{
      showToast(response.data.message, "warning", 5000);
    }
  };

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storageUser?.email) {
      alert('You are already Logged In');
      window.location.href = '/showtransaction';
    }
  }, []);

  return (
    <div>
      <Navbar />
      <form className="login-form mx-auto mt-20 py-3">
        <span className="login">Login</span>

        <input
          type="email"
          placeholder="Email address"
          className="form---input mt-3"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="form---input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div className="form--marketing">
          <label htmlFor="okayToEmail" className="checkbox text-sm">
            If you have no account,{" "}
            <b>
              <Link to="/signup">
                <u className="text-center cursor-pointer font-bold">
                  Signup here
                </u>
              </Link>
            </b>
          </label>
        </div>
        <button type="button" className="form--submit" onClick={loginUser}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
