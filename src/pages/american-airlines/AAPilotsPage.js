import React, { useState, useEffect } from "react";
import { PilotsListView } from "../../components/PilotsListView/PilotsListView";
import { Link } from "react-router-dom";
import "../../css/bidpro.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPilots,
  addPilot,
  editPilot,
  deletePilot,
} from "../../redux/pilotsSlice";
import AddPilotModal from "../../components/Modal/AddPilotModal";
import EditPilotModal from "../../components/Modal/EditPilotModal";
import DeleteConfirmationModal from "../../components/Modal/DeleteConfirmationModal";

/**
 *
 * Structural component that displays the american airlines pilots page.
 *
 */

const AAPilotsPage = () => {
  //Set up redux
  const dispatch = useDispatch();
  const selectedPilots = useSelector(selectPilots);

  //state hooks
  const [pilotsList, updatePilotsList] = useState([]);
  const [showForm, updateShowForm] = useState(false);
  const [showEditForm, updateShowEditForm] = useState(false);
  const [showDeleteConf, updateShowDeleteConf] = useState(false);
  const [deletingPilot, updateDeletingPilot] = useState({});
  const [editingPilot, updateEditingPilot] = useState({});
  const [formInput, handleFormInput] = useState({
    id: 0,
    airline: "AA",
    company: "American Airlines",
  });

  //default values for the forms to set after submit
  const defaultFormValues = {
    id: 0,
    airline: "AA",
    company: "American Airlines",
  };

  //function to handle the data entered in to the new pilot form
  const handleFormData = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    handleFormInput({ ...formInput, [id]: value });
  };

  //function to submit the new pilot form to redux, clear the form, and then close the modal
  const submitForm = () => {
    dispatch(addPilot(formInput));
    handleFormInput(defaultFormValues);
    handleClose();
  };

  //function to handle the data entered in to the edit pilot form
  const handleEditForm = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    updateEditingPilot({ ...editingPilot, [id]: value });
  };

  //function to submit the edit a pilot form and close the modal
  const submitEditForm = () => {
    dispatch(editPilot(editingPilot));
    handleEditClose();
  };

  //functions to deal with opening all 3 types of modals, passing pilot ids and whatnot
  const handleOpen = () => updateShowForm(true);
  const handleClose = () => updateShowForm(false);

  const handleEditOpen = (id) => {
    const pilotToFilter = selectedPilots.filter((pilot) => pilot.id === id);
    updateEditingPilot(pilotToFilter[0]);
    updateShowEditForm(true);
  };
  const handleEditClose = () => updateShowEditForm(false);

  const handleDeleteOpen = (id) => {
    const pilotToFilter = selectedPilots.filter((pilot) => pilot.id === id);
    updateDeletingPilot(pilotToFilter[0]);
    updateShowDeleteConf(true);
  };
  const handleDeleteClose = () => updateShowDeleteConf(false);

  //function to handle the deletion of a pilot
  const handleDelete = () => {
    dispatch(deletePilot(deletingPilot));
    handleDeleteClose();
    console.log(deletingPilot);
  };

  //keep the pilots list up to date with the redux store.
  useEffect(() => {
    const filteredPilots = selectedPilots.filter(
      (pilot) => pilot.airline === "AA"
    );
    updatePilotsList(filteredPilots);
  }, [selectedPilots]);

  //keep the inputted form data loaded
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
          <AddPilotModal
            showForm={showForm}
            handleClose={handleClose}
            handleFormData={handleFormData}
            submitForm={submitForm}
          />
          <EditPilotModal
            showEditForm={showEditForm}
            handleEditClose={handleEditClose}
            handleFormData={handleEditForm}
            submitEditForm={submitEditForm}
            editingPilot={editingPilot}
          />
          <DeleteConfirmationModal
            showForm={showDeleteConf}
            handleClose={handleDeleteClose}
            handleOpen={handleDeleteOpen}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <PilotsListView
        pilots={pilotsList}
        editHandler={handleEditOpen}
        deleteHandler={handleDeleteOpen}
      />
    </div>
  );
};


export default AAPilotsPage;
