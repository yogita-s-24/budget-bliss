import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Navbar/>
      <form className="login-form mx-auto mt-20 py-3">
        <span className="login">Login</span>

        <input
          type="email"
          placeholder="Email address"
          className="form---input mt-3"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />

        <input 
        type="password" 
        placeholder="Password" 
        className="form---input"
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
         />

        <div className="form--marketing">
          <label for="okayToEmail" className="checkbox text-sm">
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
        <button className="form--submit">Login</button>
      </form>
    </div>
  )
}

export default Login