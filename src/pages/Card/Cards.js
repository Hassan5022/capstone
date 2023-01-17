import "./Cards.css";
import Card from "./Card";

const Cards = ({ doctors, search }) => {
	// {doctors &&

	//   doctors

	//     .filter((data) => {

	//       return (

	//         data.prodName.toLowerCase().match(search.toLowerCase()) ||

	//         data.prodCategory.toLowerCase().match(search.toLowerCase())

	//       );

	//     })

	//     .map((card, index) => {

	//       return <Card key={index} data={card} />;

	//     })}

	return (
		<div className="cards">
			{/* {doctors &&
				doctors.map((doctor, index) => (
					<Card doctor={doctor} key={index } />
        ))} */}
			{doctors &&
				doctors
					.filter((data) => {
						return (
							data.name.toLowerCase().match(search.toLowerCase()) ||
							data.category.toLowerCase().match(search.toLowerCase())
						);
					})
					.map((card, index) => {
						// console.log(card);
						return <Card key={index} doctor={card} />;
					})}
		</div>
	);
};

// {/* {doctors &&
// 	doctors
// 		.filter((data) => {
// 			return (
// 				data.name.toLowerCase().match(search.toLowerCase()) ||
// 				data.category.toLowerCase().match(search.toLowerCase())
// 			);
// 		})
// .map((card, index) => {
// console.log(card)
// 			// return <Card key={index} data={card} />;
// 		})} */}
export default Cards;
