import "./Home.css";
// hooks
import { useAuthContext } from "../../hooks/useAuthContext";
// components
import Consult from "../Consult/Consult";
import Card from "../Card/Card";
import Doctor from "../Doctor/Doctor";
import Reviews from "../Reviews/Reviews";

const Home = () => {
	//   return (
	//   <>
	//       <section className="home">
	//       <div className='container'>
	//       <div className='centered'> <h1 style={{color:'white'}}>Find and book the <span style={{color:'#ff9e15'}}>best doctors </span>near you</h1>
	//       <br></br>

	//     <form>
	//       <input type="text" placeholder="Search.." name="search" className='inp'/>
	//       <button  className='a'>Search</button>
	//     </form>
	//   </div>
	//       </div>

	//       </section>
	//       <section>
	//         <Consult/>
	//       </section>
	//       <section>
	//         <Card/>
	//       </section>
	//       <section>
	//         <Doctor/>
	//       </section>
	//       <section>
	//         <Reviews/>
	//       </section>
	//       </>

	//   )
	// }

	const { doctors, doctor_error } = useAuthContext();

	return (
		<>
			<section className="home">
				<div className="container">
					<div className="centered">
						<h1 style={{ color: "white" }}>
							Find and book the{" "}
							<span style={{ color: "#ff9e15" }}>best doctors </span>near you
						</h1>
						<br></br>
						<form>
							<input
								type="text"
								placeholder="Search.."
								className="inp"
								name="search"
							/>
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
			{doctors && doctors.length !== 0 && <section>
				{doctor_error && <p>{doctor_error}</p>}
				{doctors && <Card doctors={doctors} />}
			</section>}
			<section>
				<Doctor />
			</section>
			<section>
				<Reviews />
			</section>
		</>
	);
};

export default Home;
