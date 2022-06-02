import React from "react";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css"; //css module wasnt working and google did not yield useful results.

import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "../../redux/counterSlice";

const HomePage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row value">Counter: {count}</div>
      <div className="row">
        <button className="button" onClick={() => dispatch(increment())}>
          Add
        </button>
        &nbsp;
        <button className="button" onClick={() => dispatch(decrement())}>
          Subtract
        </button>
      </div>
      <div className="text-center mt-3">
        <Link to="/american-airlines/pilots" className="button">
          American Airlines Pilots
        </Link>
      </div>
      <div className="text-center mt-3">
        <Link to="/alaska-airlines/pilots" className="button">
          Alaska Airlines Pilots
        </Link>
      </div>
    </>
  );
};

export default HomePage;
