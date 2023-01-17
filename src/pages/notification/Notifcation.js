import './Notification.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark as faXmarkLarges} from "@fortawesome/free-solid-svg-icons";

library.add(faXmarkLarges);



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
    <div className="notification">
	<div className='notification-div'>
	<div className='fa-xmarks'>
	<FontAwesomeIcon icon={faXmarkLarges} className='fa-xmark'/>
	</div>

	</div>
	<div className='notification-div'>
	<div className='fa-xmarks'>
	<FontAwesomeIcon icon={faXmarkLarges} className='fa-xmark'/>
	</div>

	</div>
	
	
	
	
	
	</div>
  )
}

export default Notifcation