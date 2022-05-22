import React from "react";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";
import PropType from "prop-types";

/**
 * View component that displays the navigation bar
 */

export function NavBarView({ menus }) {
  return (
    <div className="navbar-collapse navbar-expand-lg justify-content-end">
      <ul className="p-2 navbar-nav">
        {menus.map((menu) => (
          <NavBarDropDownView
            key={menu.id}
            airlineName={menu.airlineName}
            bidTypesPath={menu.bidTypesPath}
            pilotsPath={menu.pilotsPath}
          />
        ))}
      </ul>
    </div>
  );
}

NavBarView.propTypes = {
  menus: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      airlineName: PropType.string.isRequired,
      bidTypesPath: PropType.string.isRequired,
      pilotsPath: PropType.string.isRequired,
    })
  ),
};
