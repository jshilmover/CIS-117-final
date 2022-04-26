import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page Goes Here</h1>
    <Link to="/american-airlines/bidtypes" className="btn btn-primary">
      BidTypes
    </Link>
  </div>
);

export default HomePage;
