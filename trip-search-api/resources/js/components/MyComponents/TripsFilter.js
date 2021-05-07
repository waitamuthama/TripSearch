import React from 'react';
import { useContext } from 'react'
import { TripsContext } from '../context'
import Title from '../MyComponents/Title'
import { link } from 'react-router-dom'
function TripsFilter(props) {

  const context = useContext(TripsContext);
  let {
    handleChange,
    status,
    distance,
    minDistance,
    maxDistance,
    duration,
    minDuration,
    driver_name,
    maxDuration
  } = context

  return (
    <section className="filter-container">
      <Title title="search trips" />
      <form className="filter-form">

        {/* canceled trip */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="status"
              id="" checked={status} onChange={handleChange} />
            <label htmlFor="status">Exclude Canceled trips</label>
          </div>
        </div>
        {/* end cancel trip */}

        {/* trip distance */}
        <div className="form-group">
          <label htmlFor="distance">
            trip distance Km {distance}
          </label>
          <input type="range" name="distance"
            min={minDistance} max={maxDistance}
            id="distance" value={distance}
            onChange={handleChange}
            className="form-control" />
        </div>
        {/* end of trip distance  */}

        {/* trip duration */}
        <div className="form-group">
          <label htmlFor="duration">
            trip duration: mins {duration}
          </label>
          <input type="range" name="duration"
            min={minDuration} max={maxDuration}
            id="duration" value={duration}
            onChange={handleChange}
            className="form-control" />
        </div>
        {/* end of trip duration  */}
      </form>
    </section>
  );
}

export default TripsFilter;
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import Title from './Title'
// class TripsFilter extends Component {
//   render() {
//     return (
//       <section className="filter-container">
//         {/* <Title title="search trips" /> */}

//         <form className="filter-form">
//           {/* input type */}
//           <div className="form-group">
//             <label htmlFor="type">Enter keyword</label>
//             <input
//               type="text"
//               className="form-control"
//             />
//           </div>
//           {/* end input type */}

//           {/* check box */}
//           <div className="form-group">
//             <label>canceled trips</label>
//             <div className="single-extra">
//               <input type="checkbox" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">include canceled trips</label>
//             </div>
//           </div>
//           {/* end check box */}

//           {/* filter by distance */}
//           <div className="form-group">
//             <label>Distance</label>
//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">Any</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">under 3Km</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">3 to 8km</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">8 to 15km</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">more then 15km</label>
//             </div>
//           </div>
//           {/* end filter by distance */}


//           {/* filter by time */}
//           <div className="form-group">
//             <label>Time</label>
//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">Any</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">under 5mins</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">5 to 10 mins</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">10 to 20 mins</label>
//             </div>

//             <div className="single-extra">
//               <input type="radio" name="canceled"
//                 id="canceled" />
//               <label htmlFor="canceled">more than 20 mins</label>
//             </div>
//           </div>
//           {/* end filter by time */}
//           <br />
//           <Link to="#" className=" btn btn-primary">Search</Link>
//         </form>
//       </section>
//     );
//   }
// }

// export default TripsFilter;