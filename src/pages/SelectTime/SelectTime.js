import doctor from "../../Images/docImage.jpg";
import "./SelectTime.css";
import React, { useState } from "react";

function SelectTime() {
 
  return (
    <>
      <div className="con">
        <img src={doctor} alt="doc" className="time"></img>
        <div className="dr">
          <p>Dr. Faizan Nasir Virk</p>
          <p>Online Video Consultation (<span style={{color:'orange'}}>Online</span>)</p>
        </div>
      </div>
      <div className="sect">
        <div className="cen">
          <button className="timeButton">04:00PM</button>
          <button className="timeButton">05:00PM</button>
          <button className="timeButton">06:00PM</button>
          <button className="timeButton">07:00PM</button>
          <button className="timeButton">08:00PM</button>
          <div className="date">
          <input type="date" id="date" name="birthday" />
           </div>
        <div className="done"> <button id="done">Done</button></div>
      
        </div>
        
      </div>
    </>
  );
}
export default SelectTime;
