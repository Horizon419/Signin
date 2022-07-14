import React, {useState}from "react"
import "./Home/index.css"
import {Link, useNavigate} from "react-router-dom"
import { useUserAuth } from "./context/UserAuthContext";
import me from "../component/img/gpttoons.png"


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signIn } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
          await signIn(email, password);
          navigate("/Home")
        } catch (err) {
          setError(err.message)
        }
      };
    
    return (
        <div className="container">
          <div>
            {/* <img src={me} className="img"/> */}
          </div>
          <h1>LOGIN PAGE</h1>
        <div className="login">
          <label><b>Email Address</b></label>
      <form className="email" onSubmit={handleSubmit}>
      <input type= "email" name="email" placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}/>
      </form>
      
      <label><b>Password</b></label>
      <form className="email">
      <input type= "password" name="password" placeholder="password"
      onChange={(e) => setPassword(e.target.value)}/>
      </form>
        </div>
        <br></br>
         <center><button className='button' onClick={handleSubmit}>LOGIN</button></center>
         <p>Don't have an account? <Link to={"/Signup"}>Signup</Link></p>
      </div>
        )
      }
export default Signin