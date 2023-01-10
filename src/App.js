// hooks
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DoctorSignup from "./pages/signup/DoctorSignup";
import Navbar from "./components/Navbar";
import { Error } from "./components/Error";
import PatientSignup from "./pages/signup/PatientSignup";

function App() {
	const { authIsReady, user } = useAuthContext();

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						{/* Home */}
						
						{<Route path="/" element={<Home />} />}
						{/* {!user && <Route path="/" element={<Navigate to={"/Home"} />} />} */}
						

						{/* Login */}
						{user && <Route path="/login" element={<Navigate to={"/"} />} />} 
						{!user && <Route path="/login" element={<Login />} />}

						{/* Signup */}
						{user && <Route path="/doctor-signup" element={<Navigate to={"/"} />} />}
						{!user && <Route path="/doctor-signup" element={<DoctorSignup />} />}
						
						{user && <Route path="/patient-signup" element={<Navigate to={"/"} />} />}
						{!user && <Route path="/Patient-signup" element={<PatientSignup />} />}

						{/* Invalid url */}
						<Route path="*" element={<Error user = {user}/>} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
