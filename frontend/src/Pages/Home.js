import React from "react";
import Img8 from "../assets/Img8.png";
import Img from "../assets/img.svg";
import Imogi from "../assets/imogi.png";
import { useNavigate } from "react-router-dom";
import HospitalList from "../Components/HospitalList";

const Home = () => {
  let auth = localStorage.getItem("hospitals");
  auth = JSON.parse(auth);
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <ul className="nav">
        <li>
          <img src={Img8} alt="img" className="img1" />
        </li>
        <li>
          <img
            src={Img}
            alt="img"
            style={{ height: "50px", marginTop: "10px" }}
          />
        </li>
        <ul className="subnav">
          <li>
            <img src={Imogi} alt="imogi" className="img3" />{" "}
          </li>
          <li
            style={{ fontSize: "1.3rem", fontWeight: "600", marginTop: "25px" }}
          >
            {auth.name}
          </li>
          <li
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              marginTop: "25px",
              cursor: "pointer",
            }}
            onClick={Logout}
          >
            Logout
          </li>
        </ul>
      </ul>
      <HospitalList />
    </div>
  );
};
export default Home;
