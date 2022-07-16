import React from "react"
import { useUserAuth } from "./context/UserAuthContext"
import {Link, useNavigate} from "react-router-dom"

function Home() {
  const {user, logOut} = useUserAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogOut = async ()=>{
    try{
await logOut()
navigate("/")
    }catch (err) {
      // console.log(err.message)
    }
  }
  return (
    <>
    <div>
      home
    </div>
    <div>
      {user && user.email}
      
      <button onClick={handleLogOut}><Link to={"/"}>LOG OUT</Link></button>
    </div>
    </>
    
    
  )
}
export default Home