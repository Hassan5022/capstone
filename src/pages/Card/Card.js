import "./Card.css";
import { useNavigate } from "react-router";

const Card = ({ doctors }) => {
	const Navigate = useNavigate();

	return (
		<div className="cards">
			{doctors &&
				doctors.map((doctor) => (
					<div key={doctor.id} className="card">
						<img src={doctor.url} alt="DocImage" className="DocImage"></img>
						<p className="doctor-details">{doctor.name}</p>
						<p className="doctor-details">{doctor.category}</p>
						<p className="doctor-details">
							{doctor.experience} years experience
						</p>
						<button
							className="doctor-details"
							onClick={() => Navigate("/doctor-details", {state: {data:doctor}})}
						>
							View More
						</button>
					</div>
				))}
		</div>
	);
};

export default Card;
