import React from "react";
import "./DoctorDetails.css";
import icon from "../../Images/online.png";

const DoctorDetails = () => {
  return (
    <div className="DoctorDetails">
      <div className="fle">
        <div className="flex-lef">
          <div className="lef">
            <img src={icon} alt="icon" className="i" />
          </div>
          <div className="rig">
          <h5>Areesha Anwar</h5>
          <p>Category</p>
          <p>Experienced</p>
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
              fontWeight:'bold',
              fontSize: "16px"
            }}
          >
            <p >Fee</p>
            <p>Rs:3000</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-Between",
              padding: "15px",
              fontSize: "16px",fontWeight:'bold'
            }}
          >
            <p >Address:</p>
            <p >Use phone/laptop for video call</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-Between",
              padding: "10px",
              fontSize: "16px",fontWeight:'bold'
             
            }}
          >
            <p style={{  marginTop:'10px' }}>Available tomorrow:</p>
            <select className="sel">
              <option >Monday 4:30pm-8pm</option>
              <option >Wednesday 4:30pm-8pm</option>
              <option >Friday 4:30pm-8pm</option>
              
            </select>
          </div>
          <div style={{textAlign: "center"}}>
            <button className="b">book video consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
