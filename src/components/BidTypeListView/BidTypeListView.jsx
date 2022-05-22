import React from "react";
import { BidTypeView } from "../BidTypeView/BidTypeView";
import PropTypes from "prop-types";

export function BidTypeListView({ bids }) {
  return (
    <div className="row">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Bid Types</th>
            <th className="text-center" scope="col">
              Status
            </th>
            <th className="text-center" scope="col">
              # Bid Periods
            </th>
            <th scope="col">Last Imported</th>
            <th className="float-end" scope="col">
              <i className="fa-solid fa-brush" />
              {"  "}
              <i className="fa-solid fa-plus" />
              {"  "}
              <i className="fa-solid fa-arrows-rotate" />
            </th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <BidTypeView key={bid.id} bidTypes={bid} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

BidTypeListView.propTypes = {
  bids: PropTypes.array.isRequired,
};
