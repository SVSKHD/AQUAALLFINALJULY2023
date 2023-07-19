import AquaCommonLayout from "@/Layout/CommonLayout";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import SigninComponentPage from "./SigninComponent";
import SignupComponentPage from "./SignupComponent";

const AuthLayout = () => {
  const [signin, setSignin] = useState(false);
  const [authtitle, setAuthTitle] = useState("Signup");
  const [authdesc, setAuthDesc] = useState("Have An Account..? Signin");

  useEffect(() => {
    signin ? setAuthTitle("Signin") : setAuthTitle("Signup");
    signin
      ? setAuthDesc("Don't Have An Account..? Signup")
      : setAuthDesc("Have An Account..? Signin");
  }, [signin]);

  const ManipulateAuthState = () => {
    setSignin(!signin);
  };
  return (
    <>
      <AquaCommonLayout>
        <div className="m-5 text-center row">
          <Card className="shadow-lg auth-card mx-auto">
            <Card.Body>
              <div>
                <h5>{authtitle}</h5>
                <hr />
                <div>
                  {signin ? <SigninComponentPage /> : <SignupComponentPage />}
                </div>
                <div className="d-grid gap-2">
                  <Button
                    onClick={ManipulateAuthState}
                    variant="primary"
                    size="lg"
                  >
                    {authdesc}
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </AquaCommonLayout>
    </>
  );
};
export default AuthLayout;
