import React from "react";
import PropTypes from "prop-types";

export function PilotView({ photoPath, name, planeInfo, location, address }) {
  return (
    <div className="container">
      <div className="row">
        <img
          src={photoPath}
          className="img-fluid float start rounded-circle col-1"
        />
        <span className="col">{name}</span>
        <p className="align-self-center">{planeInfo.slice(0, 7)}</p>
        <p>{planeInfo.slice(-3)}</p>
      </div>
      <p>{location}</p>
      <address>
        {address.name}
        {address.streetAddress}
        {address.cityStateZip}
        {address.phone}
      </address>
    </div>
  );
}

PilotView.propTypes = {
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
