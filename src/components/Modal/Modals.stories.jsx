import React from "react";
import AddPilotModal from "./AddPilotModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditPilotModal from "./EditPilotModal";

export default {
  title: "InteractiveComponents/Modals",
  component: AddPilotModal,
};

const errors = {
  id: 0,
  airline: "AA",
  company: "American Airlines",
  firstName: "",
  lastName: "",
  fleet: "",
  seat: "",
  domicile: "",
  trainingFacility: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  areaCode: "",
  prefix: "",
  suffix: "",
};

const editingPilot = {
  id: 1,
  airline: "AA",
  firstName: "John",
  lastName: "Smith",
  fleet: "737",
  seat: "CPT",
  domicile: "GEG",
  trainingFacility: "Riviera State 32/106",
  company: "American Airlines",
  address1: "795 Folsom Ave",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: "94107",
  areaCode: "123",
  prefix: "456",
  suffix: "7890",
};

const AddPilotTemplate = (args) => <AddPilotModal {...args} />;
const EditPilotTemplate = (args) => <EditPilotModal {...args} />;
const DeleteTemplate = (args) => <DeleteConfirmationModal {...args} />;

export const AddPilot = AddPilotTemplate.bind({});
AddPilot.args = {
  showForm: true,
  errors: errors,
};

export const EditPilot = EditPilotTemplate.bind({});
EditPilot.args = {
  showEditForm: true,
  editingPilot: editingPilot,
};

export const DeletePilot = DeleteTemplate.bind({});
DeletePilot.args = {
  showForm: true,
};
