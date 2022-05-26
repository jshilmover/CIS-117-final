import React from "react";
import { BidTypeView } from "../BidTypeView/BidTypeView";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 
 * View component that displays a list of all bids given to it via array
 * 
 */

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
              <FontAwesomeIcon icon="fa-solid fa-brush" />
              {"  "}
              <FontAwesomeIcon icon="fa-solid fa-plus" />
              {"  "}
              <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
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
