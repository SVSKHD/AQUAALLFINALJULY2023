import SigninComponentPage from "@/PageComponents/auth/SigninComponent"
import SignupComponentPage from "@/PageComponents/auth/SignupComponent"
import AquaCenteredModal from "@/reusableComponents/centerverticallyAlignedDialog"
import { Card, Button } from "react-bootstrap"
import { useState, useEffect } from "react"

const AuthReusableDialog = (props) => {
    const [signin, setSignin] = useState(false)
    const [authtitle, setAuthTitle] = useState("Signup")
    const [authdesc, setAuthDesc] = useState("Have An Account..? Signin")
    useEffect(() => {
        signin ? setAuthTitle("Signin") : setAuthTitle("Signup")
        signin ? setAuthDesc("Don't Have An Account..? Signup") : setAuthDesc("Have An Account..? Signin")
    }, [signin])
    return (
        <>
            <AquaCenteredModal title={authtitle} show={props.show} handleClose={props.close}>
                <Card>
                    <Card.Body>
                        {signin ? <SigninComponentPage /> : <SignupComponentPage />}

                    </Card.Body>
                    <Card.Footer>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg" onClick={() => setSignin(!signin)}>
                                {authdesc}
                            </Button>
                        </div>
                    </Card.Footer>
                </Card>

            </AquaCenteredModal>
        </>
    )
}
export default AuthReusableDialog