// // hooks
// import { useEffect, useRef, useState } from "react";
// // config file
// import { realtime } from "../firebase/config";

// export const useNotificationCollection = (collection, _orderBy) => {
// 	const [notifications, setNotifications] = useState(null);
// 	const [error, setError] = useState(null);

// 	// to prevent infinite loop
// 	const orderBy = useRef(_orderBy).current;

// 	useEffect(() => {
// 		// let response = projectFirestore.collection(collection);

// 		// if (orderBy) response = response.orderBy(...orderBy);

// 		const getDocument = realtime.ref();
//         getDocument.once('value', (snapshot) => {
//             snapshot.forEach((childSnapshot) => {
//             //   var childKey = childSnapshot.key;
//             //   var childData = childSnapshot.val();
//                 console.log(childSnapshot.val())
//                 setNotifications(Object.values(childSnapshot.val()));
//               // ...
//             });
//           });
// 			// .child(collection)
// 			// // .child(id)
// 			// .get()
// 			// .then((snapshot) => {
//             //     if (snapshot.exists()) {
//             //         console.log(snapshot);
//             //         setNotifications(Object.values(snapshot.val()));
//             //         setError(null)
// 			// 	} else {
// 			// 		console.log("No data available");
// 			// 	}
// 			// })
// 			// .catch((error) => {
// 			// 	console.log(error);
// 			// 	setError("Could not fetch the data");
// 			// });
//     }, [collection, orderBy]);

// 	return { error, notifications };
// };
