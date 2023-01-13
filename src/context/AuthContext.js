// hooks
import { createContext, useEffect, useReducer } from "react";
// config file
import { projectAuth } from "../firebase/config";
import { useCollection } from "../hooks/useCollection";

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
			return { ...state, doctors: action.payload};
		case "DOCTOR_DATA_ERROR":
			return { ...state, doctor_error: action.payload};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
		doctors: null,
		doctor_error:null
	});

	const { documents, error } = useCollection(
		"doctors"
		// ["uid", "==", user.uid],
		// ["createdAt", "ascn"]
	);
	useEffect(() => {
		dispatch({type: "DOCTOR_DATA", payload:documents})
		dispatch({type: "DOCTOR_DATA_ERROR", payload:error})
	}, [documents])

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
