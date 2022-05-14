import React from "react";
import PropTypes from "prop-types";

/**
 * Interactive component that displays a navigational drop down menu
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle bidpro-color"
        type="button"
        id={airlineName}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {airlineName}
      </button>
      <ul className="dropdown-menu" aria-labelledby={airlineName}>
        <a className="dropdown-item" href={bidTypesPath}>
          Bid Types
        </a>
        <hr />
        <a className="dropdown-item" href={pilotsPath}>
          Pilots
        </a>
      </ul>
    </div>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string.isRequired,
  bidTypesPath: PropTypes.string.isRequired,
  pilotsPath: PropTypes.string.isRequired,
};
