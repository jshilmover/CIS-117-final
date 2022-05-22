import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Interactive component that displays the airline section
 */

export function AirlineView({ name, path }) {
  return (
    <div className="col-sm-12 col-md">
      <h1>{name}</h1>
      <p>
        View the monthly bid date, import history &amp; download statistics.
      </p>
      <Link to={path} className="btn btn-outline-dark">
        View
      </Link>
    </div>
  );
}

AirlineView.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};
