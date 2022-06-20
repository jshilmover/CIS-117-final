import React, { useState } from "react";

export function HelloView() {
  const [nameInput, setNameInput] = useState("");
  const [helloMessageOutput, setHelloMessageOutput] = useState("");
  const [showError, setShowError] = useState(false);

  const validateName = () => {
    if (nameInput.length < 3 || nameInput.length > 20) {
      setShowError(true);
      setHelloMessageOutput("");
    } else {
      setShowError(false);
      setHelloMessageOutput(`Hello ${nameInput}`);
    }
  };

  const clearName = () => {
    setNameInput("");
    setHelloMessageOutput("");
    setShowError(false);
  };

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="nameInput" className="col-form-label">
            Name:
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="nameInput"
            className="form-control"
            value={nameInput}
            onChange={(key) => setNameInput(key.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={validateName}>
            Display
          </button>
          <button
            className={`btn btn-danger ms-1 ${
              nameInput.length === 0 ? "d-none" : ""
            }`}
            onClick={clearName}
          >
            Clear
          </button>
        </div>
        {showError && (
          <div classNameName="col-auto">
            <span id="passwordHelpInline" classNameName="form-text">
              Must be 3-20 characters long.
            </span>
          </div>
        )}
      </div>

      <h1>{helloMessageOutput}</h1>
    </>
  );
}
