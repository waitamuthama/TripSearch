import React from 'react';
import TripsFilter from './TripsFilter'
import TripLists from './TripList'
import { withTripsConsumer } from '../context'
import TripsList from './TripList';

function TripsContainer({ context }) {
  const { sortedTrips, trips } = context;
  console.log(context);
  return (
    <>
      <TripsFilter trips={trips} />
      <TripLists trips={sortedTrips} />
    </>
  )

}

export default withTripsConsumer(TripsContainer);

{/* <div>
hello from trips container
<TripsFilter />
<TripLists />
</div>
); */}

// import React, { Component } from 'react';
// import Trip from './Trip'
// import { TripsConsumer } from '../context';

// class TripsContainer extends Component {
//   render() {
//     return (
//       <section className="tripslist">
//         <div className="tripslist-center">
//           <TripsConsumer>
//             {value => {
//               return value.trips.map(trip => {
//                 return <div className="col-md-12 container-fluid" >
//                   <Trip key={trip.id} trip={trip} />
//                 </div>
//               });
//             }}
//           </TripsConsumer>
//         </div>
//       </section>

//     );
//   }
// }

// export default TripsContainer;