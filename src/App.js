// hooks
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { Error } from "./components/Error";
import Card from "./pages/Card/Card";
import Signup from "./pages/signup/DoctorSignup";
import PatSignUp from "./pages/signup/PatSignUp";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import SelectTime from "./pages/SelectTime/SelectTime";

function App() {
	const { authIsReady, user, doctors} = useAuthContext();

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
						{!user && <Route path="/doctor-signup" element={<Signup/>} />}
						
						{user && <Route path="/patient-signup" element={<Navigate to={"/"} />} />}
						{!user && <Route path="/patient-signup" element={<PatSignUp/>} />}

						<Route path="/doctors" element={<Card doctors={doctors}/>} />
						<Route path="/doctor-details" element={<DoctorDetails/>} />
						<Route path="/select-time" element={<SelectTime/>} />


						{/* Invalid url */}
						<Route path="*" element={<Error user = {user}/>} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
