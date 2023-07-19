import Image from "next/image";
import AQ from "../../assests/logo.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import firebaseOperations from "@/firebase/firebaseOperations";

const SignupComponentPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignup } = firebaseOperations();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(email, password);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-center">
          <Image src={AQ} alt="Aqua" height={250} />
        </div>
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-start">
          <form>
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
                Signup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignupComponentPage;
