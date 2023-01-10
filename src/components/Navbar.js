// styles
import "./Navbar.css";
// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// component
import { Link } from "react-router-dom";

export default function Navbar() {
	const { user } = useAuthContext();
	const { logout } = useLogout();

	return (
		<nav className="navbar">
			<ul>
				<li className="title">
					<Link to="/">Capstone</Link>
				</li>
				{!user && (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/doctor-signup">Doctor</Link>
						</li>
						<li>
							<Link to="/patient-signup">Patient</Link>
						</li>
					</>
				)}
				{user && (
					<>
						<li>{`Hello, ${user.displayName}`}</li>
						<li>
							<img className="profile" src={user.photoURL} alt="profile" />
						</li>
						<li>
							<button className="btn" onClick={logout}>
								Logout
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
