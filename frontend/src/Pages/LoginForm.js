import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import CustomWebcam from "../Components/AllCamera";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [access, setAccess] = useState("");
  const [state, setState] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const Continue = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ name, email, pass }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result.result.name) {
      console.log(result);
      localStorage.setItem("hospitals", JSON.stringify(result.result));
      setState(false);
    } else if (result.result.startsWith("No")) {
      alert("No user Found!");
    } else {
      alert("Please fill all fields");
    }
  };

  function Redirect() {
    navigate("/");
    console.log("redirect is called");
  }

  return (
    <>
      {state ? (
        <>
          <div className="login-main">
            <div className="l-main-sub1">
              <h2>Welcome to Secu-aura</h2>
              <h5 style={{ opacity: "0.6", padding: "0px 25px" }}>
                Your one step safety solutions using innovative technology
              </h5>
              <input
                type="text"
                value={name}
                placeholder="Hospital Name"
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email Id"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
              <div style={{ style: "flex", flexDirection: "row" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={pass}
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                  name="pass"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ marginLeft: "-40px", cursor: "pointer" }}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>
              <input
                type="text"
                value={access}
                placeholder="Special Access Code"
                onChange={(e) => setAccess(e.target.value)}
                name="access"
                required
              />
            </div>
          </div>
          <button className="btn " onClick={Continue}>
            Login
          </button>
        </>
      ) : (
        <div>
          <h4 className="ph-h">Please Capture Your Face to Continue</h4>
          <CustomWebcam Continue={Redirect} />
        </div>
      )}
    </>
  );
};

export default Login;
