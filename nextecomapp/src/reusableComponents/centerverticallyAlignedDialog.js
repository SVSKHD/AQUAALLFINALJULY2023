import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AquaCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AquaCenteredModal;
