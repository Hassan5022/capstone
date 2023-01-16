// // hooks
// import { async } from "q";
// import { useEffect, useReducer, useState } from "react";
// // config file
// import { realtime, timestamp } from "../firebase/config";
// import { useNotificationCollection } from "../hooks/useNotificationCollection";

// const initialState = {
// 	error: null,
// 	document: null,
// 	isPending: false,
// 	success: null,
// };

// const firestoreReducer = (state, action) => {
// 	switch (action.type) {
// 		case "IS_PENDING":
// 			return { error: null, document: null, success: null, isPending: true };
// 		case "ADDED_DOCUMENT":
// 			return {
// 				error: null,
// 				document: action.payload,
// 				success: true,
// 				isPending: false,
// 			};
// 		case "DELETED_DOCUMENT":
// 			return { error: null, document: null, success: true, isPending: false };
// 		case "ERROR":
// 			return {
// 				error: action.payload,
// 				document: null,
// 				success: false,
// 				isPending: false,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const useRealtime = (collection) => {
// 	const [response, dispatch] = useReducer(firestoreReducer, initialState);
// 	// const [isCancelled, setIsCancelled] = useState(false);

// 	// const dispatchIfNotCancelled = (action) => {
// 	// 	if (!isCancelled) dispatch(action);
// 	// };

// 	const createdAt = timestamp.fromDate(new Date());
// 	const { notifications } = useNotificationCollection(collection, "oRpeLPYdRHdIfnFUHQK2wcdS6ME3");

// 	// add a document

// 	const writeUserData = async (userId, patientID, name, email, date) => {
// 		dispatch({ type: "IS_PENDING" });
// 		try {
// 			const documentList = realtime.ref(collection + "/");
// 			const newDocumentList = documentList.push();	
// 			const addedDocument = await newDocumentList.set({
// 				doctorID: userId,
// 				patientID: patientID,
// 				username: name,
// 				email: email,
// 				appointmentDate: date,
// 				createdAt: createdAt,
// 			});
// 			// dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
// 			dispatch({ type: "ADDED_DOCUMENT", payload: addedDocument });
// 		} catch (error) {
// 			// dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
// 			dispatch({ type: "ERROR", payload: error.message });
// 		}
// 	};

// 	// delete a document

// 	// const deleteDocument = async (id) => {
// 	// 	dispatch({ type: 'IS_PENDING' })
// 	// 	try {
// 	// 		await res.doc(id).delete()
// 	// 		dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })

// 	// 	} catch (error) {
// 	// 		console.log(error)
// 	// 		dispatchIfNotCancelled({type:'ERROR', payload: 'Could not delete'})
// 	// 	}
// 	// };

// 	// cleanup function
// 	// useEffect(() => {
// 	// 	return () => setIsCancelled(true);
// 	// }, []);

// 	return { response, writeUserData };
// };
