import doctor from "../../Images/docImage.jpg";
import "./SelectTime.css";
// import { useRealtime } from "../../hooks/useRealtime";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { useLocation } from "react-router";
import { useFirestore } from "../../hooks/useFirestore";
import { timestamp } from "../../firebase/config";

function SelectTime() {
	const location = useLocation();
	const { user, doctors } = useAuthContext();
	const [date, setdate] = useState("");
	const [time, setTime] = useState("");
	const [fieldError, setFieldError] = useState(null);
	const { addNotification } = useFirestore("doctors");
	  
	const toTimestamp = strDate => {
		var datum = Date.parse(strDate);
		return datum / 1000;
	};

	const createdAt = timestamp.fromDate(new Date());
	
	const notification = {
		doctorID: location.state.doctorData.id,
		doctorName: location.state.doctorData.name,
		doctorEmail:location.state.doctorData.email,
		patientID: location.state.patientData.id,
		patientDocID: location.state.patientData.docID,
		patientName: location.state.patientData.name,
		patientEmail: location.state.patientData.email,
		appointmentDate: toTimestamp(`${date} ${time}`),
		createdAt
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user && doctors) {
			doctors.forEach((doctor) => {
				if (doctor.id === user.uid) {
					setTime("");
					setdate("");
					alert(`${doctor.name}, please login as a patient!`);
				}
			});
		}
		if (user && location.state.patientData && location.state.doctorData) {
			if (date === "" && time === "") {
				setFieldError("Please select date and time!");
			}
			else {
				addNotification(location.state.doctorData.docID, notification)
					.then(res => {
						alert(`${user.displayName} your request has been submitted, Please wait for Dr ${location.state.doctorData.name}'s approval`);
					})
					.catch(error => {
						alert(`${user.displayName} there is an error, Please try again`);
					});
				setTime("");
				setdate("");
				setFieldError(null);
			}
		};
	}

		return (
			<>
				<div className="con">
					<img src={location.state.doctorData.url} alt="doc" className="time"/>
					<div className="dr">
						<p style={{textTransform:"capitalize"}}>{location.state.doctorData.name }</p>
						<p>
							Online Video Consultation
						</p>
					</div>
				</div>
				<div className="sect">
					<div className="cen">
						<button
							className="timeButton"
							onClick={(e) => setTime(e.target.value)}
							value="16:00:00"
						>
							04:00PM
						</button>
						<button
							className="timeButton"
							onClick={(e) => setTime(e.target.value)}
							value="17:00:00"
						>
							05:00 PM
						</button>
						<button
							className="timeButton"
							onClick={(e) => setTime(e.target.value)}
							value="18:00:00"
						>
							06:00PM
						</button>
						<button
							className="timeButton"
							onClick={(e) => setTime(e.target.value)}
							value="19:00:00"
						>
							07:00PM
						</button>
						<button
							className="timeButton"
							onClick={(e) => setTime(e.target.value)}
							value="20:00:00"
						>
							08:00PM
						</button>
						<div className="date">
							<input 
								className="date-input"
								type="date"
								id="date"
								onChange={(e) => setdate(e.target.value)}
								value={date}
							/>
						</div>
						<div className="done">
								<button onClick={handleSubmit} id="done">
									Done
								</button>
						</div>
						<div className="done">
							{fieldError && <p style={{ color: "red" }}>{fieldError}</p>}
						</div>
					</div>
				</div>
			</>
		);
	};
export default SelectTime;
