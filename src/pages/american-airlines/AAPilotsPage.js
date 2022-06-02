import React from "react";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counterSlice";

const AAPilotsPage = () => {
  const count = useSelector(selectCount);

  return (
    <>
      <h1>American Airlines Pilots</h1>
      <h2>Count: {count}</h2>
      <Link to="/">Home</Link>
    </>
  );
};

export default AAPilotsPage;
