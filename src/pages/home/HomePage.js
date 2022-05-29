import React from "react";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css"; //css module wasnt working and google did not yield useful results.

import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counterSlice";

const HomePage = () => {
  const count = useSelector(selectCount);

  return (
    <>
      <div className="row value">Counter: {count}</div>
      <div className="row">
        <button className="button" /* onClick={} */>Add</button>
        &nbsp;
        <button className="button">Subtract</button>
      </div>
      <div className="text-center mt-3">
        <Link to="/american-airlines/pilots" className="button">
          Pilots
        </Link>
      </div>
    </>
  );
};

export default HomePage;
