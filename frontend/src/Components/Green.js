import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Green = () => {
  return (
    <div className="green">
      <h2 style={{ marginTop: "30px" }}>
        Your Registration has been Successfully done
      </h2>
      <MdCheckCircle size={100} color="green" />
    </div>
  );
};

export default Green;
