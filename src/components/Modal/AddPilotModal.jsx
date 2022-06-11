import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

export default function AddPilotModal({
  showForm,
  handleClose,
  handleFormData,
  submitForm,
  errors,
  validate,
}) {
  return (
    <Modal
      show={showForm}
      fullscreen="sm-down"
      onHide={() => handleClose()}
      size="lg"
    >
      <Modal.Header closeButton>Add a Pilot</Modal.Header>
      <Modal.Body>
        <form className="row">
          <div className="col-12 col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.firstName && (
              <div className="error-message">Please enter a First Name</div>
            )}
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.lastName && (
              <div className="error-message">Please enter a Last Name</div>
            )}
          </div>
          <div className="col-12 col-md-3">
            <label htmlFor="fleet" className="form-label">
              Fleet
            </label>
            <input
              type="text"
              className="form-control"
              id="fleet"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.fleet && (
              <div className="error-message">Please enter a fleet</div>
            )}
          </div>
          <div className="col-12 col-md-3">
            <label htmlFor="seat" className="form-label">
              Seat
            </label>
            <input
              type="text"
              className="form-control"
              id="seat"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.seat && (
              <div className="error-message">Please enter a seat</div>
            )}
          </div>
          <div className="col-12 col-md-3">
            <label htmlFor="domicile" className="form-label">
              Domicile
            </label>
            <input
              type="text"
              className="form-control"
              id="domicile"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.domicile && (
              <div className="error-message">Please enter a Domicile</div>
            )}
          </div>
          <div className="col-12 col-md-3">
            <label htmlFor="trainingFacility" className="form-label">
              Training Facility
            </label>
            <input
              type="text"
              className="form-control"
              id="trainingFacility"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.trainingFacility && (
              <div className="error-message">
                Please enter a Training Facility
              </div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="address1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address1"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.address1 && (
              <div className="error-message">Please enter an address 1</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="address2" className="form-label">
              Address 2 (optional)
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.address2 && (
              <div className="error-message">Please enter an address 2</div>
            )}
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.city && (
              <div className="error-message">Please enter a City</div>
            )}
          </div>
          <div className="col-12 col-md-2">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.state && (
              <div className="error-message">Please enter a State</div>
            )}
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="postalCode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              onBlur={(e) => validate(e)}
              onChange={(e) => handleFormData(e)}
            />
            {errors.postalCode && (
              <div className="error-message">Please enter a Postal Code</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <div className="input-group text-center">
              <span className="input-group-text col-md-1 justify-content-center">
                (
              </span>
              <input
                type="text"
                className="form-control col-2"
                id="areaCode"
                onBlur={(e) => validate(e)}
                onChange={(e) => handleFormData(e)}
              />
              <span className="input-group-text col-md-1 justify-content-center">
                ){" "}
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="prefix"
                onBlur={(e) => validate(e)}
                onChange={(e) => handleFormData(e)}
              />
              <span className="input-group-text col-md-1 justify-content-center">
                -
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="suffix"
                onBlur={(e) => validate(e)}
                onChange={(e) => handleFormData(e)}
              />
            </div>
            {errors.areaCode ||
              errors.prefix ||
              (errors.suffix && (
                <div className="error-message">Phone is Required</div>
              ))}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={() => handleClose()}>
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => submitForm()}
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}

AddPilotModal.propTypes = {
  showForm: PropTypes.bool,
  handleClose: PropTypes.func,
  handleFormData: PropTypes.func,
  submitForm: PropTypes.func,
  errors: PropTypes.shape({}),
  validate: PropTypes.func,
};
