import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * View component that displays a single pilots profile.
 *
 */

export function PilotView({
  id,
  photoPath,
  name,
  planeInfo,
  location,
  address,
  handleEditOpen,
  handleDelete,
}) {
  return (
    <div className="d-flex col-4 p-4">
      <div className="pilot-text white-bg mx-auto p-3">
        <div className="row justify-content-center ">
          <div className="col-3 my-3">
            <img
              src={photoPath}
              className="img-fluid float-start rounded-circle"
            />
          </div>
          <div className="row justify-content-center m-auto px-4 col-9">
            <h4 className="col-12 fw-bold mb-0">{name}</h4>
            <div className="col-12 align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {location}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3 text-center">
            <span className="text-nowrap fw-bold">{planeInfo.slice(0, 7)}</span>
            <br />
            <span className="fw-bold">{planeInfo.slice(-3)}</span>
          </div>
          <div className="col-9 m-auto px-4">
            <address>
              <strong>{address.name}</strong>
              <br />
              {address.streetAddress}
              <br />
              {address.cityStateZip}
              <br />
              <abbr title="Phone">P:</abbr> {address.phone}
              <br />
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button
              className="btn btn-danger w-100"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn btn-primary w-100"
              onClick={() => handleEditOpen(id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

PilotView.propTypes = {
  id: PropTypes.number,
  photoPath: PropTypes.string,
  name: PropTypes.string,
  planeInfo: PropTypes.string,
  location: PropTypes.string,
  address: PropTypes.shape({
    name: PropTypes.string,
    streetAddress: PropTypes.string,
    cityStateZip: PropTypes.string,
    phone: PropTypes.string,
  }),
  handleEditOpen: PropTypes.func,
  handleDelete: PropTypes.func,
};
