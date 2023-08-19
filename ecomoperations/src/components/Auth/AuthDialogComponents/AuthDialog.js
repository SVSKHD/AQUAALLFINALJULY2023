import AquaReusableDialog from "@/reusables/Dialog"
import {Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import AuthSignin from "./AuthSignin"
import AuthSignup from "./AuthSignup"

const AquaAuthDialog = () => {
    const dispatch = useDispatch()
    const { authDialog, authStatus } = useSelector((state) => ({ ...state }))
    return (
        <>
            <AquaReusableDialog title={authStatus ?"Signin" :"Signup"} centered={true} size={'lg'} show={authDialog} hide={() => {
                dispatch({
                    type: "SET_AUTH_DRAWER_VISIBLE",
                    payload: false,
                });
            }}>
                {authStatus ? <AuthSignin /> : <AuthSignup />}
                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={()=>dispatch({
                    type: "SET_AUTH_STATUS_VISIBLE",
                    payload: !authStatus,
                })}>
                    {authStatus ? "Already Have an Account...? Signin" : "Don't Have An Account...? Signup"}
                </Button>
                </div>
            </AquaReusableDialog>
        </>
    )
}
export default AquaAuthDialog