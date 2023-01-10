// style
import './Home.css';

export const DoctorList = ({ doctors }) => {

	return (
		<ul className="doctors">
			{doctors.map(doctor => (
				<li key={doctor.id}>
					<p className="name">{doctor.name}</p><br />
					<p className="name">{doctor.city}</p><br />
					<p className="name">{doctor.category}</p>
					<img className='profile-image' src={doctor.url} alt="profile" />
				</li>
			))}
		</ul>
	);
};