import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

/**
 * Interactive component that displays a navigational drop down menu
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <>
      <NavDropdown.Item>
        <Link className="dropdown-item" to={bidTypesPath}>
          Bid Types
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <Link className="dropdown-item" to={pilotsPath}>
          Pilots
        </Link>
      </NavDropdown.Item>
    </>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string.isRequired,
  bidTypesPath: PropTypes.string.isRequired,
  pilotsPath: PropTypes.string.isRequired,
};
