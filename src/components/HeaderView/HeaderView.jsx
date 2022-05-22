import React from "react";
import { PropTypes } from "prop-types";
import { NavBarView } from "../NavBarView/NavBarView";
import { LogoView } from "../LogoView/LogoView";

/**
 * View component that displays the header for the site.
 */

export function HeaderView({ menus }) {
  return (
    <nav className="navbar navbar-expand-lg bidpro-color d-flex py-0">
      <LogoView />
      <div className="container-fluid me-2">
        <NavBarView menus={menus} />
      </div>
    </nav>
  );
}

HeaderView.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string,
      bidTypesPath: PropTypes.string,
      id: PropTypes.string,
      pilotsPath: PropTypes.string,
    })
  ),
};
