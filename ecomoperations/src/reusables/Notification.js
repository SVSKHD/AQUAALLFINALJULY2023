import { Alert } from "react-bootstrap"
const AquaNotifcations = (props) => {
    const { title, show, close } = props
    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>{title}</Alert.Heading>
                {props.children}
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={close} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>
        </>
    )
}
export default AquaNotifcations