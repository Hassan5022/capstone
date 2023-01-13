// styles
import "./Navbar.css";
// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// component
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell as faFaBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(faFaBell);

export default function Navbar() {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const Navigate = useNavigate();
	const [showNotification, setShowNotification] = useState(null);

	return (
		<nav className="navbar">
			<ul>
				<li className="title">
					<Link to="/" style={{color:'#006'}}>Med<span style={{color:'orange'}}>Cure</span></Link>
				</li>
				{!user && (
					<>
						<div className="dropdown">
							<button className="dropbtn">Login/SignUp</button>
							<div className="dropdown-content">
								<Link className="d" to="/doctor-signup">
									Doctor
								</Link>

								<Link className="d" to="/patient-signup">
									Patient
								</Link>
							</div>
						</div>
					</>
				)}
				{user && (
					<>
						<li style={{ color: "#006" }}>
							{" "}
							Hello,{" "}
							<span
								style={{ color: "orange" }}
							>{`${user.displayName}`}</span>{" "}
						</li>
						<li>
							<img className="profile" src={user.photoURL} alt="profile" />
						</li>
						<li>
							<button className="logout" onClick={logout}>
								Logout
							</button>
						</li>
						<li>
							<button
								className="bell"
								onClick={() => Navigate("/notification")}
							>
								<FontAwesomeIcon icon={faFaBell} />
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
