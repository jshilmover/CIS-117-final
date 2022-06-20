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
    <>
      <div className="row mb-2 fw-bold">
        <div className="col-1">ID</div>
        <div className="col-2">Bid Types</div>
        <div className="col-3 text-center">Status</div>
        <div className="col-2 text-center"># Bid Periods</div>
        <div className="col-2">Last Imported</div>
        <div className="col-2 text-end header-icons ">
          <FontAwesomeIcon icon="fa-solid fa-brush" />
          {"  "}
          <FontAwesomeIcon icon="fa-solid fa-plus" />
          {"  "}
          <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
        </div>
      </div>
      <div>
        {bids.map((bid) => (
          <BidTypeView key={bid.id} bidTypes={bid} />
        ))}
      </div>
    </>
  );
}

BidTypeListView.propTypes = {
  bids: PropTypes.array.isRequired,
};
