
const Notifcation = ({ doctors, user }) => {

    console.log(doctors);
    if (doctors && user) {
		doctors.forEach((doctor) => {
			if (user.uid === doctor.id) {
				console.log("Docter ID: " + doctor.id);
			}
		});
	}
  return (
    <div>Notifcation</div>
  )
}

export default Notifcation