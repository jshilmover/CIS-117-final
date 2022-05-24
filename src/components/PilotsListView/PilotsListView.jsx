import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

export function PilotsListView(pilots) {
  return (
    <div className="container">
      <div className="row">
        {console.log(pilots)}
        {pilots.map((pilot) => (
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
  pilots: PropTypes.array,
};
