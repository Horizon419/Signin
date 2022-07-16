import React, { useState } from "react";
import "./Home/index.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import me from "../component/img/gpttoons.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/Home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <div>{/* <img src={me} className="img"/> */}</div>
        <div className="title">
          <h1>LOGIN PAGE</h1>
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
                LOGIN
              </button>
              <div className="content">
                <div className="checkbox" id="remember-me">
                  <label for="remember-me">Remember me</label>
                </div>
                <div className="pass-link">
                  <a href="#">forgot password?</a>
                </div>
              </div>
            </center>
            <p>
              Don't have an account? <Link to={"/Signup"}>Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signin;
