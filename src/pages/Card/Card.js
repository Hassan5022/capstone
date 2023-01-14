import "./Card.css";
import { useNavigate } from "react-router";

const Card = ({ doctors }) => {
	const Navigate=useNavigate();

	return (
		<div className="section-three">
				{console.log("das")}
			<div className="cards">
				{doctors && doctors.map((doctor) => (
					<div key={doctor.id} className="card">
						<img src={doctor.url} alt="DocImage" className="DocImage"></img>
						<div className="s">
						<p className="doctor-details">{doctor.name}</p>
						<p className="doctor-details">{doctor.category}</p>
						<p className="doctor-details">{doctor.city}</p>
						<div className="doctor-details view"><button className="view-more"  onClick={()=>Navigate('/doctor-details')}>view more</button></div>

						{/* <div className="view-more">
						<button>view more</button>
						</div> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
