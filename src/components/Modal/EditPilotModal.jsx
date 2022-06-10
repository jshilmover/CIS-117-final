import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

export default function editPilotModal({
  showEditForm,
  handleEditClose,
  handleFormData,
  submitEditForm,
  editingPilot,
}) {
  return (
    <Modal show={showEditForm} onHide={() => handleEditClose()} size="lg">
      <Modal.Header closeButton>Edit a Pilot</Modal.Header>
      <Modal.Body>
        <form className="row">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={editingPilot.firstName}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={editingPilot.lastName}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="fleet" className="form-label">
              Fleet
            </label>
            <input
              type="text"
              className="form-control"
              id="fleet"
              value={editingPilot.fleet}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="seat" className="form-label">
              Seat
            </label>
            <input
              type="text"
              className="form-control"
              id="seat"
              value={editingPilot.seat}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="domicile" className="form-label">
              Domicile
            </label>
            <input
              type="text"
              className="form-control"
              id="domicile"
              value={editingPilot.domicile}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="trainingFacility" className="form-label">
              Training Facility
            </label>
            <input
              type="text"
              className="form-control"
              id="trainingFacility"
              value={editingPilot.trainingFacility}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address1"
              value={editingPilot.address1}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address2" className="form-label">
              Address 2 (optional)
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              value={editingPilot.address2}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={editingPilot.city}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={editingPilot.state}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="postalCode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              value={editingPilot.postalCode}
              onChange={(e) => handleFormData(e)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <div className="input-group row text-center">
              <span className="input-group-text col-md-1 justify-content-center">
                (
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="areaCode"
                value={editingPilot.areaCode}
                onChange={(e) => handleFormData(e)}
              />
              <span className="input-group-text col-md-1 justify-content-center">
                ){" "}
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="prefix"
                value={editingPilot.prefix}
                onChange={(e) => handleFormData(e)}
              />
              <span className="input-group-text col-md-1 justify-content-center">
                -
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="suffix"
                value={editingPilot.suffix}
                onChange={(e) => handleFormData(e)}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={() => handleEditClose()}>
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => submitEditForm()} //need to change this to submitEditForm
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}

editPilotModal.propTypes = {
  showEditForm: PropTypes.bool,
  handleEditClose: PropTypes.func,
  handleFormData: PropTypes.func,
  submitEditForm: PropTypes.func,
  editingPilot: PropTypes.shape({}),
};

editPilotModal.defaultProps = {
  editingPilot: {},
};