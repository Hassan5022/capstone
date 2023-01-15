// hooks
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { Error } from "./components/Error";
import Card from "./pages/Card/Card";
import DoctorSignup from "./pages/signup/DoctorSignup";
import PatSignUp from "./pages/signup/PatSignUp";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import Notification from "./pages/notification/Notification";
import SelectTime from "./pages/SelectTime/SelectTime";
import { useEffect, useState } from "react";

function App() {
	const [doctor, setDoctor] = useState(null)
	const { authIsReady, user, doctors, patients } = useAuthContext();

	useEffect(() => {	
		if (user && doctors) {
			doctors.forEach((doctor) => {
				if (doctor.id === user.uid) {
					setDoctor(doctor)
				}
			});
		}
	}, [user, doctors])

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						
						{/* Home */}
						<Route path="/" element={<Home />} />
						
						{/* Login */}
						{user && <Route path="/login" element={<Navigate to={"/"} />} />} 
						{!user && <Route path="/login" element={<Login />} />}

						{/* DoctorSignup */}
						{user && <Route path="/doctor-signup" element={<Navigate to={"/"} />} />}
						{!user && <Route path="/doctor-signup" element={<DoctorSignup/>} />}
						
						{/* {PatientSignup */}
						{user && <Route path="/patient-signup" element={<Navigate to={"/"} />} />}
						{!user && <Route path="/patient-signup" element={<PatSignUp/>} />}

						{/* Doctors */}
						<Route path="/doctors" element={<Card doctors={doctors} />} />

						{/* Notification */}
						{user && <Route path="/notification" element={<Notification doctor={doctor} user={user} />} />}
						{!user && <Route path="/notification" element={<Error/>}  />}
						
						{/* DoctorDetails */}
						{user && <Route path="/doctor-details" element={<DoctorDetails user={user} doctors={doctors} patients={patients} />} />}
						{!user && <Route path="/doctor-details" element={<Navigate to={"/login"} />} />}

						{user && <Route path="/select-time" element={<SelectTime />} />}
						{!user && <Route path="/select-time" element={<Error/>} />}

						{/* Invalid url */}
						<Route path="*" element={<Error/>} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
