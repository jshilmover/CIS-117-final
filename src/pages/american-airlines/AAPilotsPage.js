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

  const defaultFormValues = {
    id: 0,
    airline: "AA",
    company: "American Airlines",
  };

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
    dispatch(editPilot(editingPilot));
    handleEditClose();
  };

  const handleEditForm = (event) => {
    const { id, value } = event.target;
    updateEditingPilot({ ...editingPilot, [id]: value });
  };

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

  const handleDelete = () => {
    dispatch(deletePilot(deletingPilot));
    handleDeleteClose();
    console.log(deletingPilot);
  };

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
