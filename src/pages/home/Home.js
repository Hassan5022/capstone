import "./Home.css";
// hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
// components
// import { TransactionForm } from "./TransactionForm";
import { DoctorList } from "./DoctorList";

export default function Home() {
	const { user } = useAuthContext();
	const { documents, error } = useCollection(
		"doctors",
		// ["uid", "==", user.uid],
		// ["createdAt", "ascn"]
	);
	return (
		<div className="container">
			<div className="content">
				{error && <p>{error}</p>}
				{documents && <DoctorList doctors={documents} />}
			</div>
			{/* <div className="sidebar">
				<TransactionForm uid={user.uid} />
			</div> */}
		</div>
	);
}