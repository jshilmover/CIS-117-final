import React from "react";
import { HeaderView } from "../../components/HeaderView/HeaderView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../../styles.css";
import "popper.js";
import { AdministrationView } from "../../components/AdministrationView/AdministrationView";
import { VersionView } from "../../components/VersionView/VersionView";
import { AirlineView } from "../../components/AirlineView/AirlineView";
import { FooterView } from "../../components/FooterView/FooterView";

/**
 * 
 * Structural component that displays the home page.
 * 
 */

const HomePage = () => (
  <div>
    <HeaderView
      menus={[
        {
          airlineName: "American Airlines",
          bidTypesPath: "/american-airlines/bidtypes",
          id: "1",
          pilotsPath: "american-airlines/pilots",
        },
        {
          airlineName: "Alaska Airlines",
          bidTypesPath: "/alaska-airlines/bidtypes",
          id: "2",
          pilotsPath: "alaska-airlines/pilots",
        },
        {
          airlineName: "Frontier Airlines",
          bidTypesPath: "/frontier-airlines/bidtypes",
          id: "3",
          pilotsPath: "frontier-airlines/pilots",
        },
        {
          airlineName: "UPS",
          bidTypesPath: "/ups/bidtypes",
          id: "4",
          pilotsPath: "ups/pilots",
        },
      ]}
    />
    <div className="jumbotron d-flex align-items-stretch mx-5 pt-2 pb-0">
      <AdministrationView name="Jory Shilmover" />
      <VersionView current="1.0.0" />
    </div>
    <div className="d-flex mx-5 row justify-content-between">
      <span className="col-6">
        <AirlineView
          name="American Airlines"
          path="/american-airlines/bidtypes"
        />
      </span>
      <span className="col-6">
        <AirlineView name="Alaska Airlines" path="/alaska-airlines/bidtypes" />
      </span>
    </div>
    <div className="d-flex mx-5 mt-5 row justify-content-between">
      <span className="col-6">
        <AirlineView
          name="Frontier Airlines"
          path="/frontier-airlines/bidtypes"
        />
      </span>
      <span className="col-6">
        <AirlineView name="UPS" path="/ups/bidtypes" />
      </span>
    </div>
    <footer>
      <FooterView />
    </footer>
  </div>
);

export default HomePage;
