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
        <td className="col-3 align-middle">{bidPeriods}</td>
        <td className="col-2 align-middle">{lastImport}</td>
        <td className="col-2 align-middle">
          <div>
            <button className="col-12 btn btn-danger my-2">
              <span className="bi bi-x" />
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
      <td className="col-2 align-middle">Current</td>
      <td className="col-3 align-middle">{bidPeriods}</td>
      <td className="col-2 align-middle">{lastImport}</td>
      <td className="col-2 align-middle">
        <div>
          <button className="col-12 btn retry-import-button my-1">
            <span className="bi bi-cloud-download" /> Retry Import
          </button>
          <button className=" col-12 btn secondary-bidtype-button my-1">
            Bid Periods
            <span className="bi bi-caret-right-fill" />
          </button>
          <button className="col-12 btn secondary-bidtype-button my-1">
            Import History
            <span className="bi bi-caret-right-fill" />
          </button>
          <button className="col-12 btn btn-danger my-1">
            <span className="bi bi-x" />
            Delete
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
