import "./Notification.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faXmark as faXmarkLarges } from "@fortawesome/free-solid-svg-icons";

// library.add(faXmarkLarges);

const Notification = () => {
	const { user, doctors, patients } = useAuthContext();
	const { deleteNotification } = useFirestore("doctors");
	const [notifications, setNotifications] = useState(null);
	const [doctorDocID, setDoctorDocID] = useState(null);
	const [showDoctor, setShowDoctor] = useState(null);
	const { addNotification } = useFirestore("patients");

	const toDate = (seconds) => {
		const timestamp = {
			seconds: seconds,
		};
		var dateFormat = new Date(timestamp.seconds * 1000);

		return (
			dateFormat.getDate() +
			" / " +
			(dateFormat.getMonth() + 1) +
			" / " +
			dateFormat.getFullYear() +
			" " +
			dateFormat.getHours() +
			":" +
			dateFormat.getMinutes() +
			":" +
			dateFormat.getSeconds()
		);
	};

	useEffect(() => {
		if (user) {
			if (doctors) {
				doctors.forEach((doctor) => {
					if (doctor.id === user.uid) {	
						setNotifications(doctor.notification);
						setShowDoctor(true)
						setDoctorDocID(doctor.docID)
					}
				});
			} else {
				setShowDoctor(false)
			}
			if (patients) {
				patients.forEach((patient) => {
					if (patient.id === user.uid) {	
						setNotifications(patient.notification);
						setDoctorDocID(patient.docID)
					}
				});
			}
		}
	}, [user, doctors]);

	const removeNotification = (e) => {
		deleteNotification(doctorDocID, e)
	}

	const approveNotification = (docID, e) => {
		addNotification(docID, e)
			.then(res => {
			alert("Appointment has been approved")
			})
			.catch(error => {
				alert("Error occurred!")
			})
	}

	return (
		<div className="notification">
			{notifications &&
				notifications.map((notification) => (
					<div className="notification-div" key={Math.random()}>
							<div className="details">
							<p> {notification.patientName}</p>
							<p>Patient Email: {notification.patientEmail}</p>
							<p>Doctor Name: {notification.doctorName}</p>
							<p>Doctor Email: {notification.doctorEmail}</p>
							<p>Appointment Date: {toDate(notification.appointmentDate)}</p>
							<p>Created At: {toDate(notification.createdAt.seconds)}</p>
						</div>
					
						<div className="w">
							{showDoctor && <div className="delete" >
							<button onClick={() => removeNotification(notification)} className='Reject'>Reject</button>
						</div>}
						<div className="dele">
							{showDoctor && <button onClick={() => approveNotification(notification.patientDocID, notification)} className='approve'>Approve</button>}

						</div>
						<div className="createcall"><button className='approve'>createcall</button></div>
						</div>
						
				{/* <div className="fa-xmarks">
					<FontAwesomeIcon icon={faXmarkLarges} className="fa-xmark" />
				</div> */}
					</div>
					))}
		</div>
	);
};

export default Notification;
