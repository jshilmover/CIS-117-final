import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

export default function DeleteConfirmationModal({
  showForm,
  handleClose,
  handleDelete,
}) {
  return (
    <Modal show={showForm} onHide={() => handleClose()}>
      <Modal.Header className="text-center" closeButton>
        Are you sure you wish to delete?
      </Modal.Header>
      <Modal.Body className="row">
        <button
          className="btn btn-danger col-5 mx-2"
          onClick={() => handleClose()}
        >
          No
        </button>
        <button
          className="btn btn-primary col-5 mx-2"
          onClick={() => handleDelete()}
        >
          Yes
        </button>
      </Modal.Body>
    </Modal>
  );
}

DeleteConfirmationModal.propTypes = {
  showForm: PropTypes.bool,
  handleClose: PropTypes.func,
  handleDelete: PropTypes.func,
};
