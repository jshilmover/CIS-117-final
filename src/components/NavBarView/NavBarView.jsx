import React from "react";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View component that displays the navigation bar
 */

export function NavBarView({}) {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavBarDropDownView
          airlineName="American Airlines"
          bidTypesPath="/american-airlines/bidtypes"
          pilotsPath="american-airlines/pilots"
        />
        <NavBarDropDownView
          airlineName="Alaska Airlines"
          bidTypesPath="/alaska-airlines/bidtypes"
          pilotsPath="alaska-airlines/pilots"
        />
        <NavBarDropDownView
          airlineName="Frontier Airlines"
          bidTypesPath="/frontier-airlines/bidtypes"
          pilotsPath="frontier-airlines/pilots"
        />
        <NavBarDropDownView
          airlineName="UPS"
          bidTypesPath="/ups/bidtypes"
          pilotsPath="ups/pilots"
        />
      </ul>
    </div>
  );
}

