import "./Card.css";
import { useNavigate } from "react-router";

const Card = ({ doctors }) => {
	const Navigate=useNavigate();

	return (
		<div className="section-three">
			<div className="cards" onClick={()=>Navigate('/DoctorDetails')}>
				{doctors && doctors.map((doctor) => (
					<div key={doctor.id} className="card">
						<img src={doctor.url} alt="DocImage" className="DocImage"></img>
						<div>{doctor.name}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
