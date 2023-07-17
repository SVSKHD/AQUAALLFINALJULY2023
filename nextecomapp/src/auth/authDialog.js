import SigninComponentPage from "@/PageComponents/auth/SigninComponent"
import SignupComponentPage from "@/PageComponents/auth/SignupComponent"
import AquaCenteredModal from "@/reusableComponents/centerverticallyAlignedDialog"
import {Card} from "react-bootstrap"
import { useState } from "react"

const AuthReusableDialog = (props) =>{
const [signin , setSignin] = useState(false)
const [authtitle, setAuthTitle] = useState("Signup")
const [authdesc, setAuthDesc] = useState("Have An Account..? Signin")
    return(
    <>
    <AquaCenteredModal title={authtitle} show={props.show} handleClose={props.close}>
      <Card>
        <Card.Body>
       {signin ? <SigninComponentPage/> : <SignupComponentPage/>}
      </Card.Body>
    </Card>
    </AquaCenteredModal>
    </>
)
}
export default AuthReusableDialog