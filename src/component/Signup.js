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
    <>
      <div className="container">
        <div className="title">
          <h1>WELCOME</h1>
        </div>
        <div className="">
          <form className="" onSubmit={handleSubmit}>
            <label>
              <b>Email Address</b>
            </label>
            <div className="login">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <label>
              <b>Password</b>
            </label>
            <div className="login">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <center>
              <button className="button" onClick={handleSubmit}>
              SIGNUP
              </button>
            </center>
            <p>
              Have an account? <Link to={"/"}>Signin</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
