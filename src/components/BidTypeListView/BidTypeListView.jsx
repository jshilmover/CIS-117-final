import React from "react";
import { BidTypeView } from "../BidTypeView/BidTypeView";
import PropTypes from "prop-types";

export function BidTypeListView({ bids }) {
  return (
    <div>
      {bids.map((bid) => (
        <BidTypeView key={bid.id} bidTypes={bid} />
      ))}
    </div>
  );
}

BidTypeListView.propTypes = {
  bids: PropTypes.array.isRequired,
};
