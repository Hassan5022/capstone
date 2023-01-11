import "./Card.css";

const Card = ({ doctors }) => {

	return (
		<div className="section-three">
			<div className="cards">
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
