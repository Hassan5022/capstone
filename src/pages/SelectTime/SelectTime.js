// import React from "react";
// import "./SelectTime.css";
import doctor from "../../Images/docImage.jpg";

// const SelectTime = () => {
//   return (
//     <>
//       <div>
//         <div className="con">
//           <img src={doctor} alt="doc" className="time"></img>
//           <div className="dr">
//             <p>Dr. Faizan Nasir Virk</p>
//             <p>Online Video Consultation (Online)</p>
//           </div>
//         </div>
//       </div>
//       <div className="sect">

//       </div>
//     </>
//   );
// };

// export default SelectTime;
import "./SelectTime.css";
import React, { useState } from "react";
import JsonData from "../../Data/data.json";
import ReactPaginate from "react-paginate";

function SelectTime() {
  //   const [users, setUsers] = useState(JsonData.slice(0, 10));
  //   const [pageNumber, setPageNumber] = useState(0);

  //   const usersPerPage = 1;
  //   const pagesVisited = pageNumber * usersPerPage;

  //   const displayUsers = users
  //     .slice(pagesVisited, pagesVisited + usersPerPage)
  //     .map((user) => {
  return (
    <>
      <div className="con">
        <img src={doctor} alt="doc" className="time"></img>
        <div className="dr">
          <p>Dr. Faizan Nasir Virk</p>
          <p>Online Video Consultation (<span style={{color:'orange'}}>Online</span>)</p>
        </div>
      </div>
      <div className="sect">
        <div className="cen">
          <button className="timeButton">04:00PM</button>
          <button className="timeButton">05:00PM</button>
          <button className="timeButton">06:00PM</button>
          <button className="timeButton">07:00PM</button>
          <button className="timeButton">08:00PM</button>
          <div className="date">
          <input type="date" id="date" name="birthday" />
           </div>
        <div className="done"> <button id="done">Done</button></div>
      
        </div>
        
      </div>
    </>
  );
  // });

  //   const pageCount = Math.ceil(users.length / usersPerPage);

  //   const changePage = ({ selected }) => {
  //     setPageNumber(selected);
  //   };

  //   return (
  //     <div className="App">
  //     <div className="con">
  //            <img src={doctor} alt="doc" className="time"></img>
  //            <div className="dr">
  //              <p>Dr. Faizan Nasir Virk</p>
  //              <p>Online Video Consultation (Online)</p>
  //           </div>
  //             </div>
  //       {displayUsers}
  //       <ReactPaginate
  //         previousLabel={"Previous"}
  //         nextLabel={"Next"}
  //         pageCount={pageCount}
  //         onPageChange={changePage}
  //         containerClassName={"paginationBttns"}
  //         previousLinkClassName={"previousBttn"}
  //         nextLinkClassName={"nextBttn"}
  //         disabledClassName={"paginationDisabled"}
  //         activeClassName={"paginationActive"}
  //       />
  //     </div>
  //   );
  // }
}
export default SelectTime;
