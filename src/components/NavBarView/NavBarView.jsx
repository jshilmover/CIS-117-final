import React from "react";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View component that displays the navigation bar
 */

export function NavBarView({ menus }) {
  return (
    <div className="navbar-collapse navbar-expand-lg justify-content-end">
      <ul className="p-2 navbar-nav">
        {menus.map((menu) => (
          <NavBarDropDownView
            airlineName={menu.airlineName}
            bidTypesPath={menu.bidTypesPath}
            pilotsPath={menu.pilotsPath}
          />
        ))}
      </ul>
    </div>
  );
}
