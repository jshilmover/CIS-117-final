import React, { useState, useEffect } from "react";
import { PilotsListView } from "../../components/PilotsListView/PilotsListView";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css";
import { useSelector } from "react-redux";
import { selectPilots } from "../../redux/pilotsSlice";

/**
 *
 * Structural component that displays the american airlines pilots page.
 *
 */

const AAPilotsPage = () => {
  const selectedPilots = useSelector(selectPilots);
  const [pilotsList, updatePilotsList] = useState([]);

  useEffect(() => {
    const filteredPilots = selectedPilots.filter(
      (pilot) => pilot.airline === "AA"
    );
    updatePilotsList(filteredPilots);
  }, []);

  return (
    <div className="container">
      <div className="mb-4">
        <h3 className="pilot-text ps-0 ms-0">Pilots</h3>
        <Link className="link-unstyled" to="/">
          Home
        </Link>
        <span className="h6">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className="h6">App Views</span>
        <span className="h6">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className="h6">
          <strong className="active-contacts">Contacts</strong>
        </span>
      </div>
      <PilotsListView pilots={pilotsList} />;
    </div>
  );
};

export default AAPilotsPage;
