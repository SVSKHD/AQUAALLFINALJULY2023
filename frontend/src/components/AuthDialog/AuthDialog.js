import { useState } from "react";
import { Button } from "react-bootstrap";
import AqVerticalCentralDialog from "../../reusables/Dialog";
import { useDispatch } from "react-redux";
import Signin from "./Signin";
import Signup from "./Singup";

const AuthDialog = (props) => {
  const [signupStatus, setSignup] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <AqVerticalCentralDialog
        show={props.show}
        hide={props.hide}
        heading={signupStatus ? "Signin" : "Signup"}
      >
        {signupStatus ? <Signin /> : <Signup />}
        <div className="d-grid gap-2">
        <Button
          variant="link"
          size="lg"
          className="link-del text-center"
          onClick={() => {
            setSignup(!signupStatus);
          }}
        >
          {signupStatus
            ? "Don't have an Account Singup"
            : "Already have an account..? Signin"}
        </Button>
        </div>
      </AqVerticalCentralDialog>
    </>
  );
};
export default AuthDialog;
