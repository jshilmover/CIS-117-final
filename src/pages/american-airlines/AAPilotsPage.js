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

  const initialState = {
    pilotsList: [],
    showForm: false,
    showEditForm: false,
    showDeleteConf: false,
    formInput: {
      id: 0,
      airline: "AA",
      company: "American Airlines",
    },
  };

  //state hooks
  const [state, setState] = useState(initialState);

  //after converting from many hooks in to one state object I couldn't get these two to work properly within the object.
  const [deletingPilot, updateDeletingPilot] = useState({});
  const [editingPilot, updateEditingPilot] = useState({});
  const [errors, setErrors] = useState({});

  //default values for the forms to set after submit
  const defaultFormValues = {
    id: 0,
    airline: "AA",
    company: "American Airlines",
  };

  //functions pertaining to the new pilot form
  const handleOpen = () => setState({ ...state, showForm: true });
  const handleClose = () => setState({ ...state, showForm: false });

  const handleFormData = (event) => {
    const { id, value } = event.target;
    setState({ ...state, formInput: { ...state.formInput, [id]: value } });
  };

  const isValid = (event) => {
    const { id, value } = event.target;
    if (id == "firstName" && value == null) {
      setErrors({
        ...errors,
        firstName: "Please enter a First Name.",
      });
    } else if (event.target.firstName) {
      setErrors(delete errors.firstName);
    }
  };

  const submitForm = () => {
    debugger;
    isValid(state.formInput);
    if (Object.keys(errors).length === 0) {
      dispatch(addPilot(state.formInput));
      setState({ ...state, formInput: defaultFormValues });
      setErrors({});
      handleClose();
    }
  };

  //Functions pertaining to editing a pilot
  const handleEditOpen = (id) => {
    const pilotToFilter = selectedPilots.filter((pilot) => pilot.id === id);
    updateEditingPilot(pilotToFilter[0]);
    setState({ ...state, showEditForm: true });
  };
  const handleEditClose = () => setState({ ...state, showEditForm: false });

  const handleEditForm = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    updateEditingPilot({ ...editingPilot, [id]: value });
  };

  const submitEditForm = () => {
    dispatch(editPilot(editingPilot));
    handleEditClose();
  };

  //functions pertaining to the deletion of a pilot
  const handleDeleteOpen = (id) => {
    const pilotToFilter = selectedPilots.filter((pilot) => pilot.id === id);
    updateDeletingPilot(pilotToFilter[0]);
    setState({ ...state, showDeleteConf: true });
  };
  const handleDeleteClose = () => setState({ ...state, showDeleteConf: false });

  const handleDelete = () => {
    dispatch(deletePilot(deletingPilot));
    handleDeleteClose();
  };

  //keep the pilots list up to date with the redux store.
  useEffect(() => {
    const filteredPilots = selectedPilots.filter(
      (pilot) => pilot.airline === "AA"
    );
    setState({ ...state, pilotsList: filteredPilots });
  }, [selectedPilots]);

  /* useEffect(() => {
    isValid(state.formInput);
  }, [state.formInput]); */

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
            showForm={state.showForm}
            handleClose={handleClose}
            handleFormData={handleFormData}
            submitForm={submitForm}
            errors={errors}
            validate={isValid}
          />
          <EditPilotModal
            showEditForm={state.showEditForm}
            handleEditClose={handleEditClose}
            handleFormData={handleEditForm}
            submitEditForm={submitEditForm}
            editingPilot={editingPilot}
            errors={state.errors}
          />
          <DeleteConfirmationModal
            showForm={state.showDeleteConf}
            handleClose={handleDeleteClose}
            handleOpen={handleDeleteOpen}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <PilotsListView
        pilots={state.pilotsList}
        editHandler={handleEditOpen}
        deleteHandler={handleDeleteOpen}
      />
    </div>
  );
};

export default AAPilotsPage;
