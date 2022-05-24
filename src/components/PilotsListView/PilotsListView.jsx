import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

export function PilotsListView(pilots) {
  return (
    <div className="pilots-list-bg">
      <div className="row">
        {pilots.pilots.map((pilot) => (
          <PilotView
            key={pilot.key}
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
      key: PropTypes.string.isRequired,
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
