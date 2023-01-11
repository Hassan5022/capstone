// styles
import "./Signup.css";
// hooks
import { useEffect, useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { storageRef } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";

export default function DoctorSignup() {
	const [email, setEmail] = useState("");
	const [displayName, setdisplayName] = useState("");
	const [city, setCity] = useState("");
	const [category, setCategory] = useState("dentist");
	const [photo, setPhoto] = useState("");
	const [password, setPassword] = useState("");
	const [photoPending, setPhotoPending] = useState(false);
	const [url, setUrl] = useState("");
	const { error, isPending, signup} = useSignup();
	const {addDocument} = useFirestore("doctors")
	// const {user} = useAuthContext()

	useEffect(() => {
		if (url) {
			signup(email, password, displayName, url);
			addDocument({
				name: displayName,
				email,
				city,
				category,
				role: "doctor",
				url,
			});
		}
	}, [url]);

	const handleSubmit = (e) => {
		e.preventDefault();

		var uploadTask = storageRef.child(`images/${photo.name}`).put(photo);
		console.log(uploadTask);

		// Register three observers:
		// 1. 'state_changed' observer, called any time the state changes
		// 2. Error observer, called on failure
		// 3. Completion observer, called on successful completion
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				setPhotoPending(progress);
			},
			(error) => {
				console.log(error.message);
			},
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					console.log("File available at", downloadURL);
					setUrl(downloadURL);
				});
			}
		);
	};

	return (
		<form onSubmit={handleSubmit} className="signup-form">
			<h2>Signup</h2>
			<label id="email">email:</label>
			<input
				id="email"
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<label id="password">password:</label>
			<input
				id="password"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<label id="displayName">display name:</label>
			<input
				id="displayName"
				type="text"
				onChange={(e) => setdisplayName(e.target.value)}
				value={displayName}
			/>
			<label id="city">City:</label>
			<input
				id="city"
				type="text"
				onChange={(e) => setCity(e.target.value)}
				value={city}
			/>
			<label id="category">Category:</label>
			<select
				id="category"
				onChange={(e) => setCategory(e.target.value)}
				value={category}
			>
				<option value="dentist">Dentist</option>
				<option value="nutritionist">Nutritionist</option>
			</select>
			<label id="photo">Photo:</label>
			<input
				id="photo"
				type="file"
				onChange={(e) => setPhoto(e.target.files[0])}
				// value={photo}
			/>
			{!isPending && <button className="btn">Signup</button>}
			{isPending && (
				<button className="btn" disabled>
					Loading
				</button>
			)}
			{photoPending && <p>{parseInt(photoPending) + "%"}</p>}
			{error && <p>{error}</p>}
		</form>
	);
}
