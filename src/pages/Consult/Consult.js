import React from "react";
import "./Consult.css";
import Doctor from "../../Images/online.png";
import { Link } from "react-router-dom";

const Consult = () => {
	return (
		<div className="main">
			<div className="containers">
				<div>
					<div className="leftDiv">
						<img src={Doctor} alt="Doctor"></img>
					</div>
					<div className="RightDiv">
						<h3>Doctors Online Now</h3>
						<div className="circle"></div>
					</div>
					<p>instant video consultation with top doctors</p>
					<button className="button button3">
						<Link
							to="/doctors"
							style={{ textDecoration: "none", color: "white" }}
						>
							Start Consultation
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Consult;
