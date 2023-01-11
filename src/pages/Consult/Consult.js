import React from "react";
import "./Consult.css";
import { Link } from "react-router-dom";
import icon from "../../Images/online.png";
const Consult = () => {
	return (
		<div className="main">
			<div className="containers">
				<div className="left">
					<img src={icon} alt="icon" />
				</div>
				<div className="right">
					<h3 style={{ color: "#006" }} className="d">
						Doctors online now
					</h3>
					<div className="circle"></div>
					<p style={{ color: "orange" }}>
						Instant Video Consultation with Top Doctors
					</p>
					<button className="but">
						<Link
							to="/doctors"
							style={{ textDecoration: "none"}}
						>
							Start Consulting
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Consult;
