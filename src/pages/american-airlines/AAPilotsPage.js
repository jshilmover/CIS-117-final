import React, { useState, useEffect } from "react";
import { PilotsListView } from "../../components/PilotsListView/PilotsListView";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectPilots, addPilot } from "../../redux/pilotsSlice";
import { Modal } from "react-bootstrap";

/**
 *
 * Structural component that displays the american airlines pilots page.
 *
 */

const AAPilotsPage = () => {
  const dispatch = useDispatch();
  const selectedPilots = useSelector(selectPilots);
  //state hooks
  const [pilotsList, updatePilotsList] = useState([]);
  const [showForm, updateShowForm] = useState(false);
  const [showEditForm, updateShowEditForm] = useState(false);
  const [editingPilot, updateEditingPilot] = useState({});
  const [formInput, handleFormInput] = useState({
    id: 0,
    airline: "AA",
    company: "American Airlines",
  });

  const defaultFormValues = {
    id: 0,
    airline: "AA",
    company: "American Airlines",
  };

  const addPilotModal = (
    <Modal show={showForm} onHide={() => handleClose()} size="lg">
      <Modal.Header closeButton>Add a Pilot</Modal.Header>
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
                onChange={(e) => handleFormData(e)}
              />
              <span className="input-group-text col-md-1 justify-content-center">
                ){" "}
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="prefix"
                onChange={(e) => handleFormData(e)}
              />
              <span className="input-group-text col-md-1 justify-content-center">
                -
              </span>
              <input
                type="text"
                className="form-control col-md-2"
                id="suffix"
                onChange={(e) => handleFormData(e)}
              />
            </div>
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

  // eslint-disable-next-line no-unused-vars
  const editPilotModal = (
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
        <button className="btn btn-danger" onClick={() => handleClose()}>
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

  const handleFormData = (event) => {
    const { id, value } = event.target;
    handleFormInput({ ...formInput, [id]: value });
  };

  const submitForm = () => {
    dispatch(addPilot(formInput));
    handleFormInput(defaultFormValues);
    handleClose();
  };

  const submitEditForm = () => {
    //add reducer nonsense here
    handleEditClose();
  };

  const handleOpen = () => updateShowForm(true);
  const handleClose = () => updateShowForm(false);
  const handleEditOpen = (id) => {
    const pilotToFilter = selectedPilots.filter((pilot) => pilot.id === id);
    updateEditingPilot(pilotToFilter[0]);
    updateShowEditForm(true);
  };
  const handleEditClose = () => updateShowEditForm(false);

  useEffect(() => {
    const filteredPilots = selectedPilots.filter(
      (pilot) => pilot.airline === "AA"
    );
    updatePilotsList(filteredPilots);
  }, [selectedPilots]);

  useEffect(() => {}, [formInput]);

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="my-4 col-10">
          <h3 className="pilot-text ps-0 ms-0">Pilots</h3>
          <Link className="link-unstyled" to="/">
            Home
          </Link>
          <span className="h6">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <span className="h6">App Views</span>
          <span className="h6">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <span className="h6">
            <strong className="active-contacts">Contacts</strong>
          </span>
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary w-100 add-button"
            onClick={() => handleOpen()}
          >
            Add Pilot
          </button>
          {addPilotModal}
          {editPilotModal}
        </div>
      </div>
      <PilotsListView pilots={pilotsList} editHandler={handleEditOpen} />
    </div>
  );
};


export default AAPilotsPage;
