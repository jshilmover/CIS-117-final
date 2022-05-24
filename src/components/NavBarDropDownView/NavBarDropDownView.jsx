import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Interactive component that displays a navigational drop down menu
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle bidpro-color"
        type="button"
        id={airlineName}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {airlineName}
      </a>
      <ul className="dropdown-menu" aria-labelledby={airlineName}>
        <Link className="dropdown-item" to={bidTypesPath}>
          Bid Types
        </Link>
        <hr />
        <Link className="dropdown-item" to={pilotsPath}>
          Pilots
        </Link>
      </ul>
    </li>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string.isRequired,
  bidTypesPath: PropTypes.string.isRequired,
  pilotsPath: PropTypes.string.isRequired,
};
