import React, { useEffect, useState } from "react";

const HospitalList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/hospitals");
    result = await result.json();
    setProducts(result);
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="hospital-list">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "3px 2px",
        }}
      >
        <h1 style={{ marginTop: "-10px" }}>Hospitals List</h1>
        <input
          type="text"
          className="search"
          placeholder="Search Hospitals"
          onChange={searchHandle}
        />
      </div>
      <ul className="header">
        <li>S.No</li>
        <li>Date</li>
        <li>Hospital Name</li>
        <li>Email </li>
        <li>Address</li>
        <li>Phone Number</li>
        <li>State</li>
        <li>Pincode</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.date}</li>
            <li>{item.name}</li>
            <li className="scroll">{item.email}</li>
            <li className="scroll">{item.address}</li>
            <li>{item.phone}</li>
            <li>{item.state}</li>
            <li>{item.pincode}</li>
          </ul>
        ))
      ) : (
        <h1>No result found!</h1>
      )}
    </div>
  );
};

export default HospitalList;
