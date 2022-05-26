import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

/**
 * 
 * View component that displays the profiles of all the pilots passed to it as an array.
 * 
 */

export function PilotsListView(pilots) {
  return (
    <div className="pilots-list-bg px-3">
      <div className="row">
        {pilots.pilots.map((pilot) => (
          <PilotView
            key={pilot.id}
            photoPath={pilot.photoPath}
            name={pilot.name}
            planeInfo={pilot.planeInfo}
            location={pilot.location}
            address={pilot.address}
          />
        ))}
      </div>
    </div>
  );
}

PilotsListView.propTypes = {
  pilots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      photoPath: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      planeInfo: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      address: PropTypes.shape({
        name: PropTypes.string.isRequired,
        streetAddress: PropTypes.string.isRequired,
        cityStateZip: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      }),
    })
  ),
};
