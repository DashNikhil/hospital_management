import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [date, setDate] = useState("");
  const [ambulance, setAmbulance] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rnumber, setRnumber] = useState("");
  const [em_ward, setEm_ward] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setConfirm_pass] = useState("");

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const navigate = useNavigate();

  const CollectData = async () => {
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({
        name,
        address,
        city,
        state,
        pincode,
        date,
        ambulance,
        email,
        phone,
        rnumber,
        em_ward,
        pass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.result.name) {
      // console.log(result);
      localStorage.setItem("hospitals", JSON.stringify(result.result));
      navigate("/successful");
    } else {
      alert("Please fill all the fields");
    }
  };

  function MatchPass() {
    if (pass === confirm_pass) {
      CollectData();
    } else {
      alert("Confirm password does not match");
    }
  }

  return (
    <>
      <div className="signup-main">
        <div className="s-main-sub1">
          <input
            type="text"
            value={name}
            placeholder="Hospital Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
          <input
            type="text "
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            required
          />
          <input
            type="text"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            name="city"
          />
          <input
            type="text "
            value={state}
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
            name="state"
            required
          />
          <input
            type="text"
            value={pincode}
            placeholder="Pincode"
            onChange={(e) => setPincode(e.target.value)}
            name="pincode"
            required
          />
          <input
            type="text"
            value={date}
            placeholder="Hospital Registration Date"
            onChange={(e) => setDate(e.target.value)}
            name="date"
            required
          />
          <input
            type="text"
            value={ambulance}
            placeholder="Number of Ambulance available"
            onChange={(e) => setAmbulance(e.target.value)}
            name="ambulance"
            required
          />
        </div>
        <div className="s-main-sub1">
          <input
            type="email"
            value={email}
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <input
            type="text"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <input
            type="text"
            value={rnumber}
            placeholder="Hospital Registration Number"
            onChange={(e) => setRnumber(e.target.value)}
            name="rnumber"
            required
          />
          <input
            type="text"
            value={em_ward}
            placeholder="Emergency Ward Number"
            onChange={(e) => setEm_ward(e.target.value)}
            name="emward_number"
            required
          />

          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            Registration Certification Upload
          </span>
          <input type="file" required />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type={showCreatePass ? "text" : "password"}
              value={pass}
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              name="pass"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              style={{ marginTop: "15px", cursor: "pointer" }}
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type={showConfirmPass ? "text" : "password"}
              value={confirm_pass}
              placeholder="Confirm Password"
              onChange={(e) => setConfirm_pass(e.target.value)}
              name="confirm_pass"
              required
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              style={{ marginTop: "15px", cursor: "pointer" }}
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </div>
        </div>
      </div>
      <button onClick={MatchPass} className="btn ">
        Sign Up
      </button>
    </>
  );
};

export default SignUpForm;
