import React from 'react';
import Trip from './Trip'
function TripsList({ trips }) {
  return (
    <section className="container-fluid ">
      <hr />
      <h4 className="text-center">Search Results</h4>
      <hr />
      <div className="row justify-content-center">
        {
          trips.map(item => {
            return <div className="col-md-3 mr-2 mb-2 h-50">
              <Trip key={item.id} trip={item} />
              <hr />
            </div>
          })
        }
      </div>
      <hr />
    </section>
  );
}

export default TripsList;