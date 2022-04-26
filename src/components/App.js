import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import AABidTypesPage from "./american-airlines/AABidTypesPage";
import AAPilotsPage from "./american-airlines/AAPilotsPage";

function App() {
  return (
  <div className="container">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
          <Route path="/american-airlines/pilots" component={AAPilotsPage} />
      </Switch>
  </div>
  );
}

export default App;
