// styles
import "./PatSignUp.css";
// hooks
import { useState, useEffect } from "react";
import { useSignup } from "../../hooks/useSignup";
import { useFirestore } from "../../hooks/useFirestore";
import { storageRef } from "../../firebase/config";
import { Link } from "react-router-dom";

export default function PatSignUp() {
  const [email, setEmail] = useState("");
	const [displayName, setdisplayName] = useState("");
	const [photo, setPhoto] = useState("");
	const [password, setPassword] = useState("");
	const { error, isPending, signup } = useSignup();
	const [url, setUrl] = useState("");
	const { addDocument } = useFirestore("patients");
	const [photoPending, setPhotoPending] = useState(false);
	const role = "patient"
  
  useEffect(() => {
		if (url) {
			signup(addDocument, email, password, displayName, url, role);
		}
	}, [url]);

	const handleSubmit = (e) => {
		e.preventDefault();

		var uploadTask = storageRef.child(`images/${photo.name}`).put(photo)

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
				setPhotoPending(progress);
			},
			(error) => {
				console.log(error.message)
			},
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					console.log("File available at", downloadURL);
					setUrl(downloadURL)
				});
			}
		);
	};

	return (
		<div className="bg">
			<div className="containe">
				<form onSubmit={handleSubmit} className="signup-form">
					<h3 className="h1">SignUP <span style={{color:'orange'}}>Form</span></h3>

					<div className="col-25">
						<label>Email</label>
					</div>
					<div>
						<input type="email" onChange={(e) => setEmail(e.target.value)}
				value={email} placeholder="Email" id="email" />
					</div>

					<div className="col-25">
						<label>Password</label>
					</div>
					<div>
						<input onChange={(e) => setPassword(e.target.value)}
				value={password} type="password" placeholder="Password" id="password" />
					</div>

					<div className="col-25">
						<label>DisplayName</label>
					</div>
					<div>
            <input
              onChange={(e) => setdisplayName(e.target.value)}
              value={displayName}
							type="text"
							id="fname"
							name="firstname"
							placeholder=" name.."
						/>
					</div>

					<div className="col-25">
						<label>Photo</label>
					</div>
					<div>
						<input
							type="file"
							id="file"
							name="firstname"
              placeholder="Picture"
              onChange={(e) => setPhoto(e.target.files[0])}
						/>
						{photoPending && <p style={{color:'red',fontWeight:'bolder',marginLeft:'280px',marginTop:'-20px'}}>{parseInt(photoPending) + "%"}</p>}
					</div>
					
					<div className="col">
						{!isPending && (
							<button type="submit" className="bt">
								Submit
							</button>
						)}
						{isPending && (
							<button type="submit" className="bt" disabled>
								Loading
							</button>
						)}
						{error && <p style={{ color: 'red', width:"290px"}}>{error}</p>}
					</div>
					<div>
						<span style={{ color: "#006" }}>
							Already registered?
							<Link
								to="/login"
								style={{ textDecoration: "none", color: "orange" }}
							>
								Login
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}
