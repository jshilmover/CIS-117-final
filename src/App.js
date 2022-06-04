import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap";
import "../src/styles.css";
import "popper.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudArrowDown,
  faAnglesRight,
  faXmark,
  faBrush,
  faPlus,
  faArrowsRotate,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import HomePage from "./pages/home/HomePage";
import AABidTypesPage from "./pages/american-airlines/AABidTypesPage";
import AAPilotsPage from "./pages/american-airlines/AAPilotsPage";
import ASPilotsPage from "./pages/alaska-airlines/ASPilotsPage";
import FAPilotsPage from "./pages/frontier-airlines/FAPilotsPage";
import UPPilotsPage from "./pages/ups/UPPilotsPage";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
        <Route path="/american-airlines/pilots" component={AAPilotsPage} />
        <Route path="/alaska-airlines/pilots" component={ASPilotsPage} />
        <Route path="/frontier-airlines/pilots" component={FAPilotsPage} />
        <Route path="/ups/pilots" component={UPPilotsPage} />
      </Switch>
    </div>
  );
}

library.add(
  faCloudArrowDown,
  faAnglesRight,
  faXmark,
  faBrush,
  faPlus,
  faArrowsRotate,
  faLocationDot
);
export default App;
