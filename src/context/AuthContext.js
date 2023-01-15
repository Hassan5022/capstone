// hooks
import { createContext, useEffect, useReducer } from "react";
// config file
import { projectAuth } from "../firebase/config";
import { useCollection } from "../hooks/useCollection";
import { usePatientCollection } from "../hooks/usePatientCollection";

export const AuthContext = createContext();

const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, user: action.payload };
		case "LOGOUT":
			return { ...state, user: null };
		case "AUTH_IS_READY":
			return { ...state, user: action.payload, authIsReady: true };
		case "DOCTOR_DATA":
			return { ...state, doctors: action.payload };
		// case "DOCTOR_NOTIFICATION":
		// 	return { ...state, doctorNotifications: action.payload };
		case "PATIENT_DATA":
			return { ...state, patients: action.payload };
		case "DOCTOR_DATA_ERROR":
			return { ...state, doctor_error: action.payload };
		case "PATIENT_DATA_ERROR":
			return { ...state, patient_error: action.payload };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
		doctors: null,
		// doctorNotifications:null,
		patients: null,
		doctor_error: null,
		patient_error: null,
	});

	const { documents, error } = useCollection(
		"doctors"
		// ["uid", "==", user.uid],
		// ["createdAt", "ascn"]
	);
	// const { notifications } = useNotificationCollection("doctors");

	const { patientDocuments, patientError } = usePatientCollection("patients");

	useEffect(() => {
		dispatch({ type: "DOCTOR_DATA", payload: documents });
		dispatch({ type: "DOCTOR_DATA_ERROR", payload: error });
		dispatch({ type: "PATIENT_DATA", payload: patientDocuments });
		dispatch({ type: "PATIENT_DATA_ERROR", payload: patientError });
		// dispatch({ type: "DOCTOR_NOTIFICATION", payload: notifications });
	}, [documents, patientDocuments]);

	useEffect(() => {
		const unsub = projectAuth.onAuthStateChanged((user) => {
			dispatch({ type: "AUTH_IS_READY", payload: user });
			unsub();
		});
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
