import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

/**
 *
 * View component that displays the profiles of all the pilots passed to it as an array.
 *
 */

export function PilotsListView({ pilots, editHandler, deleteHandler }) {
  console.log(pilots);
  return (
    <div className="pilots-list-bg px-3">
      <div className="row">
        {pilots.map((pilot) => (
          <PilotView
            key={pilot.id}
            id={pilot.id}
            photoPath="../../john-smith.jpeg"
            name={pilot.firstName + " " + pilot.lastName}
            planeInfo={pilot.fleet + " " + pilot.seat + " " + pilot.domicile}
            location={pilot.trainingFacility}
            address={{
              name: "Twitter, Inc.",
              streetAddress: pilot.address1 + " " + pilot.address2,
              cityStateZip:
                pilot.city + " " + pilot.state + " " + pilot.postalCode,
              phone:
                "(" + pilot.areaCode + ") " + pilot.prefix + "-" + pilot.suffix,
            }}
            handleEditOpen={editHandler}
            handleDelete={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

PilotsListView.propTypes = {
  pilots: PropTypes.arrayOf(PropTypes.shape()),
  editHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
};

PilotsListView.defaultProps = {
  pilots: [{}],
};