import React from "react";
import "./Home/index.css";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signUp(email, password);
      navigate("/")
    } catch (err) {
      
    }
  };

  return (
    <div className="container">
      <h1>WELCOME</h1>
      
      <div className="login">
        <label>
          <b>Email Address</b>
        </label>
        <form className="email" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>

        <label>
          <b>Password</b>
        </label>
        <form className="email">
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <br></br>
      <center>
        <button type="submit" onClick={handleSubmit}>SIGNUP</button>
      </center>
      <p>
        have an account? <Link to={"/"}>Signin</Link>
      </p>
    </div>
  );
}

export default Signup;
