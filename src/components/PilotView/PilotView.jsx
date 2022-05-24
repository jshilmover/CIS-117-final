import React from "react";
import PropTypes from "prop-types";

export function PilotView({ photoPath, name, planeInfo, location, address }) {
  return (
    <div className="col-4 my-3 px-3">
      <div className="container pilot-text white-bg">
        <div className="row">
          <div className="col-3 my-3">
            <img
              src={photoPath}
              className="img-fluid float-start rounded-circle"
            />
          </div>
          <div className="row col-9">
            <h3 className="col-12 fw-bold mb-0">{name}</h3>
            <div className="col-12 align-items-center">
              <i className="fa-solid fa-location-dot"></i> {location}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <span className="text-nowrap fw-bold">{planeInfo.slice(0, 7)}</span>
            <br />
            <span className="fw-bold">{planeInfo.slice(-3)}</span>
          </div>
          <div className="col-9">
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
      </div>
    </div>
  );
}

PilotView.propTypes = {
  key: PropTypes.string,
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
};
