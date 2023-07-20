import Image from "next/image";
import AQ from "../../assests/logo.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import firebaseOperations from "@/firebase/firebaseOperations";
import toastMessages from "@/reusableComponents/toast";
import { useDispatch } from "react-redux";

const SigninComponentPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignin } = firebaseOperations();
  const { successToast, errorToast } = toastMessages();

  //store
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { result, error } = await handleSignin(email, password);

    if (error) {
      errorToast(error);
    }

    // else successful
    if (result) {
      dispatch({
        type: "SET_AUTH_DIALOG_VISIBLE",
        payload: false,
      });

      successToast("Succesfully logged in");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-center">
          <Image src={AQ} height={250} />
        </div>
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-start">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                onClick={handleSubmit}
              >
                Signin
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SigninComponentPage;
