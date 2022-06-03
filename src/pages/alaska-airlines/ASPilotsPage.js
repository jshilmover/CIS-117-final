import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, addInput } from "../../redux/counterSlice";

const ASPilotsPage = () => {
  const [value, setValue] = useState();
  const [showError, setError] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (value) => {
    value = parseInt(value, 10);
    debugger;
    if (!isNaN(value)) {
      if (value <= 0 || value >= 999) {
        setError(true);
      } else {
        dispatch(addInput(value, 10));
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row value">Counter: {count}</div>
      <div className="row">
        <input
          type="number"
          className="col-sm-1 mx-3 py-2 text-center fs-3 "
          step="any"
          onChange={handleChange}
          value={value || ""}
        />
        <button
          className="add-amount col-sm-2 fs-2"
          onClick={() => handleClick(value)}
        >
          Add Amount
        </button>
        {showError ? (
          <p className="text-center error mx-5 mt-2 py-2">
            Please enter a number between 1 and 999.{" "}
          </p>
        ) : null}
      </div>
      <div className="text-center mt-3">
        <Link className="button" to="/">
          Home
        </Link>
      </div>
    </>
  );
};

export default ASPilotsPage;
