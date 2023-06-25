import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const AqVerticalCentralDialog = (props) => {
  const dispatch = useDispatch();
  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        {props.children}
      </Modal.Body>
    </Modal>
  );
};
export default AqVerticalCentralDialog;
