import React from "react";
import PropTypes from "prop-types";

export function BidTypeView({
  bidTypes: { id, bidType, bidPeriods, lastImport, state },
}) {
  if (state === "IMPORTING") {
    return (
      <div className="row importing">
        <div className="col-1 align-self-center">
          <p>{id}</p>
        </div>
        <div className="col-3 align-self-center">
          <p>{bidType}</p>
        </div>
        <div className="col-2 align-self-center">
          <p>Importing</p>
        </div>
        <div className="col-1 align-self-center">
          <p>{bidPeriods}</p>
        </div>
        <div className="col-3 align-self-center">
          <p>{lastImport}</p>
        </div>
        <div className="row col-2 align-self-center">
          <button className="btn btn-danger my-2">
            <span className="bi bi-x" />
            Cancel
          </button>
        </div>
      </div>
    );
  }
  return (
    <tr>
      <th className="col-1 align-middle" scope="row">
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
    /*     <div className="row">
      <div className="col-1 align-self-center">
        <p>{id}</p>
      </div>
      <div className="col-3 align-self-center">
        <p>{bidType}</p>
      </div>
      <div className="col-2 align-self-center">
        <p>Current</p>
      </div>
      <div className="col-1 align-self-center">
        <p>{bidPeriods}</p>
      </div>
      <div className="col-3 align-self-center">
        <p className="text-center">{lastImport}</p>
      </div>
      <div className="row col-2 align-self-center">
        <button className="btn retry-import-button my-1">
          <span className="bi bi-cloud-download" /> Retry Import
        </button>
        <button className="btn secondary-bidtype-button my-1">
          Bid Periods
          <span className="bi bi-caret-right-fill" />
        </button>
        <button className="btn secondary-bidtype-button my-1">
          Import History
          <span className="bi bi-caret-right-fill" />
        </button>
        <button className="btn btn-danger my-1">
          <span className="bi bi-x" />
          Delete
        </button>
      </div>
    </div> */
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
