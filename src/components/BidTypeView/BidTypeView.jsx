import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * View component that displays one bid type.
 *
 */

export function BidTypeView({
  bidTypes: { id, bidType, bidPeriods, lastImport, state },
}) {
  if (state === "IMPORTING") {
    return (
      <div className="row align-items-center importing">
        <hr className="bids-seperator" />
        <div className="col-1">{id}</div>
        <div className="col-2 text-center">{bidType}</div>
        <div className="col-3 text-center">Current</div>
        <div className="col-2">{bidPeriods}</div>
        <div className="col-2">{lastImport}</div>
        <div className="col-2">
          <button className="col-12 btn btn-danger my-2">
            <FontAwesomeIcon icon="fa-solid fa-xmark" /> Cancel
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="row align-items-center bid-table">
      <hr className="bids-seperator" />
      <div className="col-1">{id}</div>
      <div className="col-2">{bidType}</div>
      <div className="col-3 text-center">Current</div>
      <div className="col-2 text-center">{bidPeriods}</div>
      <div className="col-2">{lastImport}</div>
      <div className="col-2">
        <button className="col-12 btn retry-import-button my-1">
          <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" /> Retry Import
        </button>
        <button className=" col-12 btn secondary-bidtype-button my-1">
          Bid Periods <FontAwesomeIcon icon="fa-solid fa-angles-right" />
        </button>
        <button className="col-12 btn secondary-bidtype-button my-1">
          Import History <FontAwesomeIcon icon="fa-solid fa-angles-right" />
        </button>
        <button className="col-12 btn btn-danger my-1">
          <FontAwesomeIcon icon="fa-solid fa-xmark" /> Delete
        </button>
      </div>
    </div>
  );
}

BidTypeView.propTypes = {
  //composition of the bidtype
  bidTypes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bidType: PropTypes.string.isRequired,
    bidPeriods: PropTypes.string.isRequired,
    lastImport: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};
