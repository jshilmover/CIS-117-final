import React from "react";
import PropTypes from "prop-types";

/**
 * View component that displays the navigation bar
 */

export function NavBarView({ nav1, nav2, nav3, nav4 }) {
  return (
    <div className="container-fluid">
      {nav1}
      {nav2}
      {nav3}
      {nav4}
    </div>
  );
}

NavBarView.propTypes = {
  nav1: PropTypes.string.isRequired,
  nav2: PropTypes.string.isRequired,
  nav3: PropTypes.string.isRequired,
  nav4: PropTypes.string.isRequired,
};
