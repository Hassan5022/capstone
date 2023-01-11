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
						<div className="dropdown">
							<button className="dropbtn">Login/SignUp</button>
							<div className="dropdown-content">
								<Link className="d" to="/doctor-signup">Doctor</Link>

								<Link className="d" to="/patient-signup">Patient</Link>
							</div>
						</div>
					</>
				)}
				{user && (
					<>
						<li>{`Hello, ${user.displayName}`}</li>
						<li>
							<img className="profile" src={user.photoURL} alt="profile" />
						</li>
						<li>
							<button className="logout" onClick={logout}>
								Logout
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
//   return (
//     <nav className="navbar">
//       <ul>
//         <li className="title">Capstone</li>
//         {!user && (
//           <>
//             <div className="dropdown">
//               <button className="dropbtn">Login/SignUp</button>
//               <div className="dropdown-content">
//                <Link to="/PatSignUP" className='d'>Patient</Link>
//             <Link to="/signup" className='d'>Doctor</Link>
//               </div>
//             </div>
//             {/* <li>
// 							<Link to="/login">Login</Link>
// 						</li>
// 						<li>
// 							<Link to="/signup">Signup</Link>
// 						</li> */}
//           </>
//         )}
//         {user && (
//           <>
//             <li>{`Hello, ${user.displayName}`}</li>
//             <li>
//               <button className="logout" onClick={logout}>
//                 Logout
//               </button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
}
