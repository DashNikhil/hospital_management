import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import Img8 from "../assets/Img8.png";
import Img6 from "../assets/Img6.png";
import Img from "../assets/img.svg";
import Imgs1 from "../assets/imgs1.svg";
import Imgs2 from "../assets/imgs2.svg";

const SignUp = () => {
  return (
    <div className="main">
      <div className="img1">
        <img src={Img8} alt="Image8" className="img8" />
        <h4>
          <img src={Img} alt="svgImg" />
        </h4>
        <h5>
          <img src={Imgs1} alt="svgImg" />
        </h5>
        <h5>
          <img src={Imgs2} alt="svgImg" />
        </h5>
      </div>

      <div className="main2">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={Img6} alt="Image1" className="img6" />
          <ul className="list">
            <li>
              <Link
                to="/signup"
                style={{
                  opacity: "0.4",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h3>Sign Up</h3>
              </Link>
            </li>
            <span style={{ fontSize: "1.6rem", fontWeight: "700" }}>/</span>
            <li>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h3>Login</h3>
              </Link>
            </li>
          </ul>
        </div>

        <LoginForm />
        <h3
          style={{
            alignItems: "center",
            margin: "30px auto",
            opacity: "0.6",
            cursor: "pointer",
          }}
        >
          Term and Codition
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
