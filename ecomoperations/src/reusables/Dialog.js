import {Modal} from "react-bootstrap"
const AquaReusableDialog = (props) => {
    const { show, hide, size, title, centered } = props
    return (
        <>
            <Modal
                show={show}
                onHide={hide}
                size={size}
                centered={centered ? centered : false}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </>
    )
}
export default AquaReusableDialog