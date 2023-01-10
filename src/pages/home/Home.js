import "./Home.css";
// hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
// components
// import { TransactionForm } from "./TransactionForm";
// import { DoctorList } from "./DoctorList";

// export default function Home() {
// 	const { user } = useAuthContext();
// 	const { documents, error } = useCollection(
// 		"doctors",
// 		// ["uid", "==", user.uid],
// 		// ["createdAt", "ascn"]
// 	);
// 	return (
// 		<div className="container">
// 			<div className="content">
// 				{error && <p>{error}</p>}
// 				{documents && <DoctorList doctors={documents} />}
// 			</div>
// 			{/* <div className="sidebar">
// 				<TransactionForm uid={user.uid} />
// 			</div> */}
// 		</div>
// 	);
// }
import "./Home.css";
import Consult from "../Consult/Consult";
import Card from "../Card/Card";

const Home = () => {
	return (
		<>
			<section className="home">
				<div className="container">
					<div className="centered">
						{" "}
						<h1 style={{ color: "white" }}>
							Find and book the{" "}
							<span style={{ color: "#ff9e15" }}>best doctors </span>near you
						</h1>
						<br></br>
						<form>
							<input type="text" placeholder="Search.." name="search" />
							<button type="submit" className="a">
								Search
							</button>
						</form>
					</div>
				</div>
			</section>
			<section>
				<Consult />
			</section>
			<section>
				<Card />
			</section>
		</>
	);
};

export default Home;
