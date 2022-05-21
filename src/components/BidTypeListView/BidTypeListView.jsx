import React from "react";
import { BidTypeView } from "../BidTypeView/BidTypeView";
import PropTypes from "prop-types";

export function BidTypeListView({ bids }) {
  return (
    <div className="container table-responsived">
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Bid Types</th>
              <th scope="col">Status</th>
              <th scope="col"># Bid Period</th>
              <th scope="col">Last Imported</th>
              <th scope="col">icons</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <BidTypeView key={bid.id} bidTypes={bid} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

BidTypeListView.propTypes = {
  bids: PropTypes.array.isRequired,
};
