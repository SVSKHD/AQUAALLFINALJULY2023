import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function AquaRightCornerModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered={false}>
        <Modal.Header closeButton>
          <Modal.Title>Right Corner Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a modal that appears in the right corner of the screen.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AquaRightCornerModal;
