import { Button } from "react-bootstrap";
import AqVerticalCentralDialog from "../../reusables/Dialog";
import { useDispatch, useSelector } from "react-redux";
import Signin from "./Signin";
import Signup from "./Singup";

const AuthDialog = (props) => {
  const { SignupStatus, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const isUserNotLoggedIn = () => (
    <>
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
    </>
  );
  const isUserLoggedIn = () => (
    <div className="text-center">
      <div class="demo-wrapper">
        <div class="svg-wrapper">
          <svg class="svg" version="1.1" id="tick" viewBox="6 5 26 26">
            <polyline
              class="path"
              points="
    11.6,20 15.9,24.2 26.4,13.8 "
            />
          </svg>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <AqVerticalCentralDialog
        show={props.show}
        hide={props.hide}
        heading={Signup ? "Signin" : "Signup"}
      >
        {user ? isUserLoggedIn() : isUserNotLoggedIn()}
      </AqVerticalCentralDialog>
    </>
  );
};
export default AuthDialog;
