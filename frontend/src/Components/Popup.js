import React from "react";
import Green from "./Green";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const navigate = useNavigate();

  return (
    <div className="popup">
      <Green />
      <div style={{ display: "none" }}>
        {setTimeout(() => {
          navigate("/");
        }, 2000)}
      </div>
    </div>
  );
};

export default Popup;
