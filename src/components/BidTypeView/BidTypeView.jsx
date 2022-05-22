import React from "react";
import PropTypes from "prop-types";

export function BidTypeView({
  bidTypes: { id, bidType, bidPeriods, lastImport, state },
}) {
  if (state === "IMPORTING") {
    return (
      <tr className="importing">
        <th className="col-1 align-middle fw-normal" scope="row">
          {id}
        </th>
        <td className="col-2 align-middle">{bidType}</td>
        <td className="col-2 align-middle">Importing</td>
        <td className="col-2 text-center align-middle">{lastImport}</td>
        <td className="col-2 align-middle">
          <div>
            <button className="col-12 btn btn-danger my-2">
              <i className="fa-solid fa-cloud-arrow-down" />
              Cancel
            </button>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <th className="col-1 align-middle fw-normal" scope="row">
        {id}
      </th>
      <td className="col-2 align-middle">{bidType}</td>
      <td className="col-3 text-center align-middle">Current</td>
      <td className="col-2 text-center align-middle">{bidPeriods}</td>
      <td className="col-2 align-middle">{lastImport}</td>
      <td className="col-2 align-middle">
        <div>
          <button className="col-12 btn retry-import-button my-1">
            <i className="fa-solid fa-cloud-arrow-down" /> Retry Import
          </button>
          <button className=" col-12 btn secondary-bidtype-button my-1">
            Bid Periods <i className="fa-solid fa-angles-right" />
          </button>
          <button className="col-12 btn secondary-bidtype-button my-1">
            Import History <i className="fa-solid fa-angles-right" />
          </button>
          <button className="col-12 btn btn-danger my-1">
            <i className="fa-solid fa-xmark" /> Delete
          </button>
        </div>
      </td>
    </tr>
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
