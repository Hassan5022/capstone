import React from "react";
import "./DoctorDetails.css";
import { useLocation, useNavigate } from "react-router";

const DoctorDetails = () => {
  const location = useLocation();
  const Navigate = useNavigate();

  return (
    <div className="DoctorDetails">
      <div className="fle">
        <div className="flex-lef">
          <div className="lef">
            <img src={location.state.data.url} alt="profile" className="i" />
          </div>
          <div className="rig">
            <h5>{location.state.data.name}</h5>
            <p>{location.state.data.email}</p>
            <p>{location.state.data.category}</p>
            <p>{location.state.data.experience} years experience</p>
            <p>{location.state.data.city}</p>
          </div>
        </div>
        <div className="flex-righ">
          <h5 style={{ textAlign: "center", padding: "20px" }}>
            online video consultation
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-Between",
              padding: "15px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <p>Fee</p>
            <p>Rs:500</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-Between",
              padding: "15px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <p>Address:</p>
            <p>Use phone/laptop for video call</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-Between",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <p style={{ marginTop: "10px" }}>Available Slot:</p>
            <select className="sel">
              <option>Monday 4:00pm-8pm</option>
              <option>Wednesday 4:00pm-8pm</option>
              <option>Friday 4:00pm-8pm</option>
            </select>
          </div>
          <div style={{ textAlign: "center" }} className="DOC-button">
            <button className="b" onClick={() => Navigate("/select-time")}>
              book video consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
