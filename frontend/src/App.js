import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Components/Private";
import Login from "./Pages/Login";
import Popup from "./Components/Popup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<Home />} />
            <Route path="/successful" element={<Popup />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
