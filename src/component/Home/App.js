import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../Signin";
import Signup from "../Signup";
import Home from "../Home";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Protect from "../../Protect";

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Home" element={<Protect><Home /></Protect>} />
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
