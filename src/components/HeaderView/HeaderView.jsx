import React from "react";
import { PropTypes } from "prop-types";

/**
 * View component that displays the header for the site.
 */

export function HeaderView({ logo, navbar }) {
  return (
    <nav className="navbar navbar-expand-lg bidpro-color d-flex py-0">
      {logo}
      <div className="container-fluid me-2">{navbar}</div>
    </nav>
  );
}

HeaderView.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  navbar: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
