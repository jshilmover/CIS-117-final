import React from "react";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";
import PropType from "prop-types";
import NavDropdown from "react-bootstrap/NavDropdown";

/**
 * View component that displays the navigation bar
 */

export function NavBarView({ menus }) {
  return (
    <div>
      <ul className="p-2 navbar-nav mr-auto">
        {menus.map((menu) => (
          <NavDropdown key={menu.key} title={menu.airlineName}>
            <NavBarDropDownView
              key={menu.id}
              airlineName={menu.airlineName}
              bidTypesPath={menu.bidTypesPath}
              pilotsPath={menu.pilotsPath}
            />
          </NavDropdown>
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
