import { useState } from "react";
import { Button } from "react-bootstrap";
import AqVerticalCentralDialog from "../../reusables/Dialog";
import { useDispatch, useSelector } from "react-redux";
import Signin from "./Signin";
import Signup from "./Singup";

const AuthDialog = (props) => {
 
  const { SignupStatus } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  return (
    <>
      <AqVerticalCentralDialog
        show={props.show}
        hide={props.hide}
        heading={Signup ? "Signin" : "Signup"}
      >
        {SignupStatus ? <Signin /> : <Signup />}
        <div className="d-grid gap-2">
          <Button
            variant="link"
            size="lg"
            className="link-del text-center"
            onClick={() => {
              dispatch({
                type: "SET_AUTH_STATUS_VISIBLE",
                payload: !SignupStatus,
              });
            }}
          >
            {SignupStatus
              ? "Don't have an Account..? Singup"
              : "Already have an Account..? Signin"}
          </Button>
        </div>
      </AqVerticalCentralDialog>
    </>
  );
};
export default AuthDialog;
