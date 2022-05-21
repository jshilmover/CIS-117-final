import React from "react";
import { BidTypeView } from "../BidTypeView/BidTypeView";
import PropTypes from "prop-types";

export function BidTypeListView({ bids }) {
  return (
    <div className="row">
      <div className="col-1 align-self-center">
        <p className="fw-bolder">ID</p>
      </div>
      <div className="col-1 align-self-center">
        <p className="fw-bolder">Bid Types</p>
      </div>
      <div className="col-2" />
      <div className="col-1 align-self-center">
        <p className="fw-bolder">Status</p>
      </div>
      <div className="col-2  align-self-center">
        <p className="text-center fw-bolder"># Bid Periods</p>
      </div>
      <div className="col-3 align-self-center">
        <p className="text-center fw-bolder">Last Import</p>
      </div>
      <div className="col-1" />
      <div className="col-1 align-self-center"></div>
      <hr />
      {bids.map((bid) => (
        <BidTypeView key={bid.id} bidTypes={bid} />
      ))}
    </div>
  );
}

BidTypeListView.propTypes = {
  bids: PropTypes.array.isRequired,
};
