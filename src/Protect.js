import React from "react"
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./component/context/UserAuthContext";


function Protect({children}) {
let {user} = useUserAuth();
    if(!user) {
return <Navigate to="/"/>
    }
  return (
    children
  )
}
export default Protect